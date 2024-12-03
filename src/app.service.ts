import { Injectable } from '@nestjs/common';

export interface IInitialMessage {
  message: string;
}

@Injectable()
export class AppService {
  getInitialMessage(): IInitialMessage {
    return {
      message: 'Fullstack Challenge 🏅 - Dictionary',
    };
  }
}
