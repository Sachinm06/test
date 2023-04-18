import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  register(uname: any, no: any, psw: any) {
    const data = { uname, no, psw }  
    console.log(data);
    // localStorage.setItem("user",data.uname)
    // localStorage.setItem("number",data.no)
    // localStorage.setItem("password",data.psw)
    

    return this.http.post('http://localhost:3001/register', data)
  }

}
