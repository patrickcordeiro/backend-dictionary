import { Controller, Get } from '@nestjs/common';
import { AppService, IInitialMessage } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getInitialMessage(): IInitialMessage {
    return this.appService.getInitialMessage();
  }
}
