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
    no: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]]
  })

  aregister() {
    
    this.data1=localStorage.getItem("user")
    var uname = this.registerForm.value.uname
    var no = this.registerForm.value.no
    var psw = this.registerForm.value.psw

    if (this.registerForm.valid) {

      this.ds.register(uname,no,psw).subscribe((result:any) => {
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
