import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { TeacherviewComponent } from './teacher/teacherview/teacherview.component';

const routes: Routes = [
  { path: 'student/dashboard', component: StudentDashboardComponent },
  { path: 'view/students', component: StudentViewComponent },
  { path: 'teacher/dashboard', component: TeacherDashboardComponent },
  { path: 'teacher/view', component: TeacherviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
