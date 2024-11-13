import { Body, Controller, Get, Post } from '@nestjs/common';
import { DialogflowService } from './dialogflow.service';

@Controller('dialogflow')
export class DialogflowController {
  constructor(private readonly service: DialogflowService) {}
  @Post()
  handleDialogflowWebhook(@Body() body: any): any {
    return this.service.hanleDialogflowWebhook(body);
  }
  @Get()
  handleDialogflowWebhookWelcome() {
    return 'Welcome to dialogflow';
  }
}
