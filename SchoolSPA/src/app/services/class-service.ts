import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ClassRoom } from '../models/classRoom';

@Injectable()
export class ClassService {
  constructor(private httpClient: HttpClient) { }

  public ViewClasses(): Observable<ClassRoom[]> {
    let url = environment.schoolPath.class + '/api/class/viewbysections';
    return this.httpClient.get<ClassRoom[]>(url);
  }
}
