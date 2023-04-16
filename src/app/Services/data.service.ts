import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  register(uname: any, number: any, psw: any) {
    const data = { uname, number, psw }  
    console.log(data);
    localStorage.setItem("user",data.uname)
    localStorage.setItem("number",data.number)
    localStorage.setItem("password",data.psw)
    

    return this.http.post('http://localhost:3001/register', data)
  }

}
