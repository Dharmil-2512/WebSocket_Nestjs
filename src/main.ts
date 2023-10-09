import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as fs from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH, 'utf-8'),
    cert: fs.readFileSync(process.env.SSL_CRT_PATH, 'utf-8'),
  };

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    httpsOptions: httpsOptions,
  });

  app.setGlobalPrefix('api');

  app.enableCors({ origin: '*' });

  await app.listen(process.env.PORT);
}
bootstrap();
