import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class StudentService {
  constructor(private httpClient: HttpClient) { }

  public RegisterStudent(student: Student): boolean {
    let payload = JSON.stringify(student);
    console.log(payload);
    let url = environment.schoolPath.student + '/api/student/register';
    let status = false;

    this.httpClient.post(url, payload).subscribe(response => {
      debugger;
      if (response) {
        status = <boolean>response;
      }
    }, err => console.log(err), () => console.log('student registered successfully.'));

    return status;
  }

  public ListStudents(): Observable<Student[]> {
    let url = "https://localhost:5000/api/student/view";
    return this.httpClient.get<Student[]>(url);
  }
}
