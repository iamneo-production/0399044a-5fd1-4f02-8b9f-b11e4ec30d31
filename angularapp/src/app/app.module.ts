import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminacademyComponent } from './Admin/adminacademy/adminacademy.component';
import { ViewacademyComponent } from './User/viewacademy/viewacademy.component';
import { AcademyComponent } from './Admin/adminacademy/academy/academy.component';
import { EditacademyComponent } from './Admin/adminacademy/editacademy/editacademy.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { AdmincourseComponent } from './Admin/admincourse/admincourse.component';
import { CourseComponent } from './Admin/admincourse/course/course.component';
import { EditcourseComponent } from './Admin/admincourse/editcourse/editcourse.component';
import { AdminstudentComponent } from './Admin/adminstudent/adminstudent.component';
import { StudentComponent } from './Admin/adminstudent/student/student.component';
import { EditstudentComponent } from './Admin/adminstudent/editstudent/editstudent.component';
import { ViewcourseComponent } from './User/viewcourse/viewcourse.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminacademyComponent,
    ViewacademyComponent,
    AcademyComponent,
    EditacademyComponent,
    SearchFilterPipe,
    AdmincourseComponent,
    CourseComponent,
    EditcourseComponent,
    AdminstudentComponent,
    StudentComponent,
    EditstudentComponent,
    ViewcourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
