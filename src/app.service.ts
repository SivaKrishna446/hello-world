import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'This is Jetblue Foundation Hello World App V2';
  }
}
