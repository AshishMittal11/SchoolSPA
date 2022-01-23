import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeacherService } from '../../services/teacher-service';

@Component({
  selector: 'app-teacherview',
  templateUrl: './teacherview.component.html',
  styleUrls: ['./teacherview.component.css']
})
export class TeacherviewComponent implements OnInit {

  public teachers: Teacher[] = [];

  constructor(private teacherService : TeacherService) { }

  ngOnInit(): void {
    this.loadTeachers();
  }

  private loadTeachers() {
    this.teacherService.ViewTeachers().subscribe(response => {
      if (response) {
        this.teachers = response;
      }
    }, err => console.log(err), () => console.log('teachers loaded successfully.'));
  }
}
