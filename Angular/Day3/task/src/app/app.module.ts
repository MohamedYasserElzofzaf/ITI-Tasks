import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestDirectivesComponent } from './components/test-directives/test-directives.component';
import { RoutingComponent } from './components/routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDirectivesComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
