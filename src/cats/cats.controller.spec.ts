import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const catsController = app.get<CatsController>(CatsController);
      expect(catsController.getHello()).toBe('Hello World!');
    });
  });
});
