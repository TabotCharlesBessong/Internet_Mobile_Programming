import { NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, NgIf, FormsModule, ReactiveFormsModule]
})
export class LoginComponent  implements OnInit {

  passwordIsVisible = signal(false)

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  })


  constructor() { }

  ngOnInit() {}

  onLogin(){
    
  }

  setPasswordVisibilityState(){
    this.passwordIsVisible.set(!this.passwordIsVisible())
  }

}
