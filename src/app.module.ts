import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrowserGuard } from './browser/browser.guard';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, { provide: 'BROWSER_GUARD', useClass: BrowserGuard }],
})
export class AppModule {}
