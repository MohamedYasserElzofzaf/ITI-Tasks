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
  persons:{name:string, age:number}[]=[];

  AddHello(){
    this.phrase="Hello";
  }

  get NameValid(){
    return this.name!="" && this.name.length>=3;
  }

  get AgeValid(){
    return this.age>18;
  }

  AddNewPerson(){
    let person:{name:string, age:number} = {name:this.name, age:this.age};

    if(this.AgeValid && this.NameValid)
      this.persons.push(person);
  }
}
