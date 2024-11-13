import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

const DEFAULT_MODEL_ID = 'gpt-3.5-turbo';

@Injectable()
export class ChatGptService {
  private readonly openAiApi: OpenAI;
  constructor() {
    this.openAiApi = new OpenAI({
      apiKey: process.env.OPEN_AI_API_KEY,
      organization: process.env.ORGANIZATION_ID,
    });
  }

  async getModelAnswer(question: string, temperature: number = 0.9) {
    try {
      const params: any = {
        model: DEFAULT_MODEL_ID,
        prompt: question,
        temperature,
        max_tokens: 100,
      };
      const response = await this.openAiApi.completions.create(params);

      return response.choices[0].text;
    } catch (err: any) {
      return err;
    }
  }
}
