import { Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { SignupStartComponent } from "./components/signup-start/signup-start.component";
import { SignupEndComponent } from "./components/signup-end/signup-end.component";
import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./components/reset-password/reset-password.component";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'signup/start',
        component: SignupStartComponent,
      },
      {
        path: 'signup/end',
        component: SignupEndComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'password/forgot',
        component: ForgotPasswordComponent
      },
      {
        path: 'password/reset',
        component: ResetPasswordComponent
      }
    ]
  }
]
