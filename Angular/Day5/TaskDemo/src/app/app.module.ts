import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/Ref&Componentinteraction/register/register.component';
import { StudentComponent } from './components/Ref&Componentinteraction/student/student.component';
import { StudentsComponent } from './components/routing/students/students.component';
import { StudentDetailsComponent } from './components/routing/student-details/student-details.component';
import { AboutComponent } from './components/routing/about/about.component';
import { ErrorComponent } from './components/routing/error/error.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'students/:id', component: StudentDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StudentComponent,
    StudentsComponent,
    StudentDetailsComponent,
    AboutComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
