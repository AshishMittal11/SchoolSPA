import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher-service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent implements OnInit {

  public teacher: Teacher = new Teacher();

  constructor(private teacherService : TeacherService) { }

  ngOnInit(): void {

  }

  public RegisterTeacher(): void {
    console.log(this.teacher);
  }
}
