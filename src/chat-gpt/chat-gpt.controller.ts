import { Body, Controller, Post } from '@nestjs/common';
import { ChatGptService } from './chat-gpt.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';

@Controller('chat-gpt')
export class ChatGptController {
  constructor(private readonly service: ChatGptService) {}

  @Post('/message')
  getModelAnswer(@Body() data: GetAiModelAnswer) {
    return this.service.getModelAnswer(data.question);
  }
}
