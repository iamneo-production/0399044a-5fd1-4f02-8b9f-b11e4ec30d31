import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { RegistrationServiceService } from './Service/registration-service.service';
import { AcademyService } from './Service/academy.service';
import { CourseService } from './Service/course.service';
import { StudentService } from './Service/student.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { EnrolledcourseComponent } from './User/enrolledcourse/enrolledcourse.component';



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
    EnrolledcourseComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RegistrationServiceService, AcademyService, CourseService, StudentService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
