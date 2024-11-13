import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ChatGptModule } from './chat-gpt/chat-gpt.module';
import { DialogflowModule } from './dialogflow/dialogflow.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ChatGptModule,
    DialogflowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
