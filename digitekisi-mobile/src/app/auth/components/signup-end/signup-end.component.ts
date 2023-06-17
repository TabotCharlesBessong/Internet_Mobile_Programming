import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-signup-end',
  templateUrl: './signup-end.component.html',
  styleUrls: ['./signup-end.component.scss'],
  standalone: true,
  imports: [RouterLink, IonicModule, FormsModule, ReactiveFormsModule, NgIf]
})
export class SignupEndComponent  implements OnInit {

  signupEndForm: FormGroup = new FormGroup({
    verificationCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
  })

  constructor() { }

  ngOnInit() {}

  endSignup(){}

}
