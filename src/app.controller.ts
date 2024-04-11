import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { Browser } from './browser/browser.decorator';
import { BrowserGuard } from './browser/browser.guard';

@Controller()
@UseGuards(BrowserGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('firefox')
  @Browser('Firefox', 'Gecko')
  sayHelloToFirefox(): string {
    return this.appService.sayHelloToFirefox();
  }

  @Get('chrome')
  @Browser('Chrome')
  sayHelloToChrome(): string {
    return this.appService.sayHelloToChrome();
  }
}
