import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGoodbye(): string {
    return 'Goodbye World!';
  }

  createUswer(name: string): string {
    return `User ${name} created successfully!`;
  }
}
