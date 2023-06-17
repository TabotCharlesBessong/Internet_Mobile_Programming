import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { HomeComponent } from "./home/home.component";
import { BookComponent } from "./book/book.component";
import { GpsComponent } from "./gps/gps.component";
import { AccountComponent } from "./account/account.component";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'book',
        component: BookComponent,
      },
      {
        path: 'gps',
        component: GpsComponent,
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  }
]
