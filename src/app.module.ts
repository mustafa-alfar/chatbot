import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ChatGptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
