import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Subject } from './subject';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/api/subjects")
  getAllSubjects(): Subject[] {
    return this.appService.getAllSubjects();
  }

  @Get("/api/subjects/:id")
  getSubject(@Param('id') id: string): Subject {
    return this.appService.getSubject(id);
  }
}
