import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademyComponent } from './Admin/adminacademy/academy/academy.component';
import { AdminacademyComponent } from './Admin/adminacademy/adminacademy.component';
import { EditacademyComponent } from './Admin/adminacademy/editacademy/editacademy.component';
import { AdmincourseComponent } from './Admin/admincourse/admincourse.component';
import { CourseComponent } from './Admin/admincourse/course/course.component';
import { EditcourseComponent } from './Admin/admincourse/editcourse/editcourse.component';
import { AdminstudentComponent } from './Admin/adminstudent/adminstudent.component';
import { EditstudentComponent } from './Admin/adminstudent/editstudent/editstudent.component';
import { StudentComponent } from './Admin/adminstudent/student/student.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EnrolledcourseComponent } from './User/enrolledcourse/enrolledcourse.component';
import { ViewacademyComponent } from './User/viewacademy/viewacademy.component';
import { ViewcourseComponent } from './User/viewcourse/viewcourse.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin/academy', component: AdminacademyComponent, canActivate: [AuthGuard] },
  { path: 'admin/addAcademy', component: AcademyComponent, canActivate: [AuthGuard] },
  { path: 'admin/editAcademy/:id', component: EditacademyComponent, canActivate: [AuthGuard] },
  { path: 'admin/course', component: AdmincourseComponent, canActivate: [AuthGuard] },
  { path: 'admin/addCourse', component: CourseComponent, canActivate: [AuthGuard] },
  { path: 'admin/editCourse/:id', component: EditcourseComponent, canActivate: [AuthGuard] },
  { path: 'admin/student', component: AdminstudentComponent, canActivate: [AuthGuard] },
  { path: 'admin/addStudent', component: StudentComponent, canActivate: [AuthGuard] },
  { path: 'admin/editStudent/:id', component: EditstudentComponent, canActivate: [AuthGuard] },
  { path: 'user/academy/:id', component: ViewacademyComponent, canActivate: [AuthGuard] },
  { path: 'user/course/:id', component: ViewcourseComponent, canActivate: [AuthGuard] },
  { path: 'user/enrolledcourse/:id', component: EnrolledcourseComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
