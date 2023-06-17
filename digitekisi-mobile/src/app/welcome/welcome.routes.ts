import { Routes } from "@angular/router";
import { LandingComponent } from "./landing/landing.component";
import { WalkthroughComponent } from "./walkthrough/walkthrough.component";
import { WelcomeComponent } from "./welcome.component";

export const WELCOME_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full'
  },
  {
    path: '',
    component: WelcomeComponent,
    children: [
      {
        path: 'landing',
        component: LandingComponent,
        data: { key: 'landing' }
      },
      {
        path: 'walkthrough',
        component: WalkthroughComponent,
        data: { key: 'walkthrough' }
      }
    ]
  }
]
