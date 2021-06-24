import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {


  id:any;

  constructor(MyActivated:ActivatedRoute) {
    console.log(MyActivated.snapshot.params["id"]);
    this.id = MyActivated.snapshot.params.id;
   }

  ngOnInit(): void {
  }



}
