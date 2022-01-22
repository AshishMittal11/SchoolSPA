import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  public student: Student = new Student();

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  public RegisterStudent() {
    console.log(this.student);
  }
}
