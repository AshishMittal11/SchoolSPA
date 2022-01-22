import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { environment } from '../../environments/environment';


@Injectable()
export class StudentService {
  constructor(private httpClient: HttpClient) { }

  public RegisterStudent(student: Student): boolean {
    let url = environment.schoolPath.student + 'api/student';
    let status = false;
    this.httpClient.post(url, student).subscribe(response => {
      if (response) {
        status = <boolean>response;
      }
    }, err => console.log(err), () => console.log('student registered successfully.'));

    return status;
  }

  public ListStudents(): Student[] {
    let url = environment.schoolPath.student + 'api/student';
    let students: Student[] = [];
    this.httpClient.get(url).subscribe(response => {
      if (response) {
        students = <Student[]>response;
      }
    }, err => console.log('error while fetching the students'), () => console.log('student fetching done.'));

    return students;
  }
}
