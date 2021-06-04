import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private myHttpClient: HttpClient) { }

  myUrl = "https://jsonplaceholder.typicode.com/users";

  getData(){
    return this.myHttpClient.get(this.myUrl);
  }
  getIdData(id:number){
    return this.myHttpClient.get(`${this.myUrl}/${id}`)
  }
}
