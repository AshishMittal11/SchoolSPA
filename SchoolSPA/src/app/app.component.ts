import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from './models/student';
import { StudentService } from './services/student-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'School Single Page Application';

  constructor(private router: Router) { }

  public ArenaClick(category: string) {

    if (category === 'student') {
      this.router.navigateByUrl('student/dashboard');
    }
    else if (category === 'teacher') {
      this.router.navigateByUrl('teacher/dashboard');
    }
  }
}


