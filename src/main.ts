import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(app.get('BROWSER_GUARD'));
  await app.listen(3000);
}
bootstrap();
