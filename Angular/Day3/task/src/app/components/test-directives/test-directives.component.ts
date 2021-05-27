import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-directives',
  templateUrl: './test-directives.component.html',
  styleUrls: ['./test-directives.component.css']
})
export class TestDirectivesComponent {

  constructor() { }
  phrase:string = "";
  name:string = "";
  age:number=0;

  AddHello(){
    this.phrase="Hello";
  }

 /* wdown:string = "";
  getData(data:any){
    this.wdown = data.target.value;
  }
*/
}
