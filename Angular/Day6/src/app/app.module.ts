import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentsComponent } from './components/students/students/students.component';
import { StudentDetailsComponent } from './components/studentDetails/student-details/student-details.component';
import { AboutComponent } from './components/about/about/about.component';
import { ErrorComponent } from './components/error/error/error.component';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
  {path:'',component:StudentsComponent},
  {path:'students',component:StudentsComponent},
  {path:'students/:id',component:StudentDetailsComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailsComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
