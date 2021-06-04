import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'routings';

  students: { fname: string; lname: string }[] = [];
  reciveData(data: any) {
    this.students.push(data);
  }
}
