import { Module } from '@nestjs/common';
import { DialogflowService } from './dialogflow.service';
import { DialogflowController } from './dialogflow.controller';
import { ChatGptController } from 'src/chat-gpt/chat-gpt.controller';

@Module({
  providers: [DialogflowService],
  controllers: [DialogflowController, ChatGptController],
})
export class DialogflowModule {}
