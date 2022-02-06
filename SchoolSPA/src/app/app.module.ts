import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { StudentService } from './services/student-service';
import { HttpClientModule } from '@angular/common/http';
import { TeacherService } from './services/teacher-service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { TeacherviewComponent } from './teacher/teacherview/teacherview.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassService } from './services/class-service';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    TeacherDashboardComponent,
    StudentViewComponent,
    TeacherviewComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [    
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [StudentService, TeacherService, ClassService],
  bootstrap: [AppComponent]
})
export class AppModule { }
