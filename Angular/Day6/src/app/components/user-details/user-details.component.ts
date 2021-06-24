import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id:number=0;
  user:any;
  constructor(private myService: DataService, myActivated: ActivatedRoute) {
    this.id = myActivated.snapshot.params.id;
   }

  ngOnInit(): void {
    this.myService.getIdData(this.id).subscribe(
      (res)=>{this.user=res;},
      (err)=>{console.log(err)}
    )
  }

}
