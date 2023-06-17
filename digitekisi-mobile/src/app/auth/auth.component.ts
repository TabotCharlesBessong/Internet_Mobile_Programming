import { Component } from "@angular/core";
import { SignupStartComponent } from "./components/signup-start/signup-start.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";
import { IonicModule } from "@ionic/angular";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";

@Component({
  selector: 'digitekisi-auth',
  template: `
    <ion-router-outlet></ion-router-outlet>
  `,
  standalone: true,
  imports: [
    AuthComponent,
    SignupStartComponent,
    SignupStartComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    LoginComponent,
    IonicModule,
    RouterLink,
    RouterLinkActive,
  ]
})
export class AuthComponent {

}
