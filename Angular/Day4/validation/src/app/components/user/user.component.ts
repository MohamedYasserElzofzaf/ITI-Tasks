import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private myService: DataService) { }

  user:any;
  ngOnInit(): void {
    this.myService.getData().subscribe(
      (res)=>{this.user = res;},
      (err)=>{console.log(err);}
    )
  }

}
  