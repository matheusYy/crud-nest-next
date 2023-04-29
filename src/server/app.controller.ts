import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  home() {
    return {};
  }

  @Get(':id')
  @Render('[id]')
  public blogPost(@Param('id') id: string) {
    return {};
  }
}
