import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class StudentService {
  constructor(private httpClient: HttpClient) { }

  public RegisterStudent(student: Student): Observable<boolean> {
    let payload = JSON.stringify(student);
    let url = environment.schoolPath.student + '/api/student/register';
    return this.httpClient.post<boolean>(url, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  public ListStudents(): Observable<Student[]> {
    // let url = "https://localhost:5000/api/Student/view";
    let url = environment.schoolPath.student + '/api/student/view';
    return this.httpClient.get<Student[]>(url, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
