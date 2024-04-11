import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHelloToFirefox(): string {
    return 'Hello Firefox!';
  }

  sayHelloToChrome(): string {
    return 'Hello Chrome!';
  }
}
