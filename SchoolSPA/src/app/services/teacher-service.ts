import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable()
export class TeacherService {
  constructor(private httpClient: HttpClient) { }

  public TeacherRegister(teacher: Teacher): Observable<boolean> {
    let url = environment.schoolPath.teacher + '/api/teacher/register';
    let payload = JSON.stringify(teacher);
    return this.httpClient.post<boolean>(url, payload);
  }

  public ViewTeachers(): Observable<Teacher[]> {
    let url = environment.schoolPath.teacher + '/api/teacher/view';
    return this.httpClient.get<Teacher[]>(url);
  }
}
