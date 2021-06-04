import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() ourEvent = new EventEmitter();
  AddNewUser(first: any, last: any) {
    let student: { FirstName: string; LastName: string } = {
      FirstName: first,
      LastName: last,
    };
    this.ourEvent.emit(student);
  }
}
