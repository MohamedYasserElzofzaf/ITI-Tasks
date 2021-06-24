import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {path:'',redirectTo:'user',pathMatch:"full"},
  {path:'user',component:UserComponent},
  {path:'user/:id',component:UserDetailsComponent},
  {path:'**',component:ErrorComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
