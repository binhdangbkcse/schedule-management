import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Subject } from './Subject';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/api/subjects")
  getAllSubjects(): Subject[] {
    return this.appService.getAllSubjects();
  }

  @Get("api/subject/:id")
  getSubject(id: string): Subject {
    return this.appService.getSubject(id);
  }
}
