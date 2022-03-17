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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewacademyComponent } from './User/viewacademy/viewacademy.component';
import { ViewcourseComponent } from './User/viewcourse/viewcourse.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin/academy', component: AdminacademyComponent },
  { path: 'admin/addAcademy', component: AcademyComponent },
  { path: 'admin/editAcademy/:id', component: EditacademyComponent },
  { path: 'admin/course', component: AdmincourseComponent },
  { path: 'admin/addCourse', component: CourseComponent },
  { path: 'admin/editCourse/:id', component: EditcourseComponent },
  { path: 'admin/student', component: AdminstudentComponent },
  { path: 'admin/addStudent', component: StudentComponent },
  { path: 'admin/editStudent/:id', component: EditstudentComponent },
  { path: 'user/academy/:id', component: ViewacademyComponent },
  { path: 'user/course', component: ViewcourseComponent },
  { path: "", redirectTo: '/login', pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
