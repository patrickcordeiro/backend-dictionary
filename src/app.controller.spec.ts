import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: {
            getInitialMessage: jest.fn().mockReturnValue({
              message: 'Fullstack Challenge 🏅 - Dictionary',
            }),
          },
        },
      ],
    }).compile();

    appController = module.get<AppController>(AppController);
    appService = module.get<AppService>(AppService);
  });

  describe('Initial Messagem API', () => {
    it('should return an object with message: "Fullstack Challenge 🏅 - Dictionary"', () => {
      const result = appController.getInitialMessage();

      expect(result).toStrictEqual({
        message: 'Fullstack Challenge 🏅 - Dictionary',
      });

      expect(appService.getInitialMessage).toHaveBeenCalledTimes(1);
    });
  });
});
