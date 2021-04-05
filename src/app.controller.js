import { Controller, Dependencies, UseInterceptors, Get, Post, Bind, Body } from '@nestjs/common';
import { AppService } from './app.service';
import InputInterceptor from './inputInterceptor';

@Controller()
@Dependencies(AppService)
export class AppController {
  constructor(appService) {
    this.appService = appService;
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post("/api/parking")
  @UseInterceptors(new InputInterceptor({
    type: 'object',
    properties: {
      body: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            maxLength: 45,
          },
          price: {
            type: 'integer',
            minimum: 0,
          },
          unit: {
            type: 'integer',
            enum: [1, 2],
          },
        },
        required: ['name'],
      }
    }
  }))
  @Bind(Body())
  createPark(parking) {
    return parking
  }
}