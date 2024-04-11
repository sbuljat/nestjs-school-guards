import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import DeviceDetector = require('device-detector-js');
import { Observable } from 'rxjs';

@Injectable()
export class BrowserGuard implements CanActivate {
  private readonly deviceDetector = new DeviceDetector();
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('Entering BrowserGuard');
    const decorator = this.reflector
      .get<string[]>('browser', context.getHandler())
      .map((name) => name.toLowerCase());

    if (!decorator) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const result = this.deviceDetector.parse(request.headers['user-agent']);
    console.log('Device Detector =>', result);
    const browserName = result.client?.name?.toLowerCase();
    console.log('Browser Name =>', browserName);

    return browserName && decorator.includes(browserName);
  }
}
