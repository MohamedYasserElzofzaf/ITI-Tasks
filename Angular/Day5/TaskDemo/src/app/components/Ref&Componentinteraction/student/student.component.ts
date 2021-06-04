import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [],
})
export class StudentComponent implements OnInit, OnChanges {
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // if (!changes.ourStudent.currentValue) {
    //   this.studList.push(this.ourStudent);
    // }
    if (this.ourStudent) {
      this.studList.push(this.ourStudent);
    }
  }

  ngOnInit(): void {}
  // @Input() studList: { fname: string; lname: string }[] = [];
  @Input() ourStudent: any;
  studList: { fname: string; lname: string }[] = [];
}
