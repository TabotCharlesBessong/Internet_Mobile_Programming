import { NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-signup-start',
  templateUrl: './signup-start.component.html',
  styleUrls: ['./signup-start.component.scss'],
  standalone: true,
  imports: [RouterLink, IonicModule, FormsModule, ReactiveFormsModule, NgIf]
})
export class SignupStartComponent  implements OnInit {

  signupStartForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  })

  passwordIsVisible = signal(false)

  constructor() { }

  ngOnInit() {}

  setPasswordVisibilityState(){
    this.passwordIsVisible.set(!this.passwordIsVisible())
  }

  startSignup(){}

}
