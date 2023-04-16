import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  uname: any
  number: any
  psw: any
  data1: any

  constructor(private ds: DataService, private router: Router, private fb: FormBuilder) { }


  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    number: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  Register() {
    
    this.data1=localStorage.getItem("user")
    var uname = this.registerForm.value.uname
    var number = this.registerForm.value.number
    var psw = this.registerForm.value.psw

    if (this.registerForm.valid) {

      this.ds.register(uname, number, psw).subscribe((result: any) => {
        alert(result.message)
      },
        result => {
          alert(result.error.message)
        }

      )
    }
    else {
      alert('Invalid Form')
    }
  }

}
