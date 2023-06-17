import { NgIf } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, NgIf, FormsModule, ReactiveFormsModule]
})
export class ResetPasswordComponent  implements OnInit {

  passwordIsVisible = signal({
    newPasswordState: false,
    confirmPasswordState: false,
  })

  resetPasswordForm: FormGroup = new FormGroup({
    verificationCode: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
    newPassword: new FormControl('', [Validators.required, Validators.email]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(7)]),
  })

  constructor() { }

  ngOnInit() {}

  changePassState(type: 'newPassword' | 'confirmPassword') {
    this.passwordIsVisible.set({
      newPasswordState: type === 'newPassword' ? !this.passwordIsVisible().newPasswordState : this.passwordIsVisible().newPasswordState,
      confirmPasswordState: type === 'confirmPassword' ? !this.passwordIsVisible().confirmPasswordState : this.passwordIsVisible().confirmPasswordState
    })
  }

  onPasswordReset(){}

}
