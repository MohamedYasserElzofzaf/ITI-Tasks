import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/Ref&Componentinteraction/register/register.component';
import { StudentComponent } from './components/Ref&Componentinteraction/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
