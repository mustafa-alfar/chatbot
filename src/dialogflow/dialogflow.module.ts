import { Module } from '@nestjs/common';
import { DialogflowService } from './dialogflow.service';
import { DialogflowController } from './dialogflow.controller';
import { ChatGptService } from 'src/chat-gpt/chat-gpt.service';

@Module({
  providers: [DialogflowService, ChatGptService],
  controllers: [DialogflowController],
  exports: [DialogflowService],
})
export class DialogflowModule {}
