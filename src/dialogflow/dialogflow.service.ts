import { Injectable } from '@nestjs/common';
import { ChatGptService } from 'src/chat-gpt/chat-gpt.service';

@Injectable()
export class DialogflowService {
  constructor(private readonly service: ChatGptService) {}

  async hanleDialogflowWebhook(body: any) {
    // Extract the intent name from the request
    const intentName = body.queryResult.intent.displayName;

    // Generate a response based on the intent
    let responseText = '';
    switch (intentName) {
      case 'Welcome Intent':
        responseText = await this.service.getModelAnswer(
          'what year are we in?',
        );
        break;
      case 'Help Intent':
        responseText = 'Here are some things I can help you with...';
        break;
      // Add more intents as needed
      default:
        responseText = 'I’m not sure how to help with that.';
        break;
    }

    // Return a response to Dialogflow
    return {
      fulfillmentText: responseText,
    };
  }
}
