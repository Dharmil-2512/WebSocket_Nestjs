import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { CountryModule } from './country/country.module';

@Module({
  imports: [CountryModule],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
