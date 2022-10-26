import { Injectable } from '@nestjs/common';
import {Subject} from './Subject';
@Injectable()
export class AppService {
  subject1 = new Subject("CO0000", "Mobile", "H1-101", "2g chiều");
  subject2 = new Subject("CO0001", "Mobile", "H1-102", "2g chiều");
  getAllSubjects(): Array<Subject> {
    return [this.subject1, this.subject2];
  }
  getSubject(id:string){
    if (id == this.subject1.id){
      return this.subject1
    }
    else if (id == this.subject2.id){
      return this.subject2;
    }
  }
}
