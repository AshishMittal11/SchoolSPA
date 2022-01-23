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
    this.teacherService.TeacherRegister(this.teacher).subscribe(response => console.log(response), err => {
      console.log('teacher registration error');
      console.log(err);
    }, () => console.log('teacher registeration done successfully.'));
  }
}
