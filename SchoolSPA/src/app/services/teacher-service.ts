import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import { environment } from '../../environments/environment';


@Injectable()
export class TeacherService {
  constructor(private httpClient: HttpClient) { }
}
