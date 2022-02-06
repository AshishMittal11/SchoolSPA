import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student-service';
import { DatePipe } from '@angular/common';
import { ClassService } from '../../services/class-service';
import { ClassRoom } from '../../models/classRoom';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  public student: Student = new Student();
  public classes: ClassRoom[] = [];

  constructor(private router: Router, private studentService: StudentService, private classService: ClassService) { }

  ngOnInit(): void {
    this.classService.ViewClasses().subscribe(response => {
      if (response) {
        this.classes = response;
      }
    }, err => {
      console.log('error during pulling classes');
      console.log(err)
    }, () => console.log('classes download completed.'));
  }

  public RegisterStudent() {
    this.student.dob = '11/11/1988';
    this.student.createdDate = '01/22/2022';
    this.student.modifiedDate = '01/22/2022';
    console.log(this.student);
    this.studentService.RegisterStudent(this.student).subscribe(response => {
      if (response) {
        console.log('student added successfully.');
        console.log(response);
      }
    }, err => {
      console.log('student registration error');
      console.log(err);
    }, () => console.log('student registration completed.'));
  }
}
