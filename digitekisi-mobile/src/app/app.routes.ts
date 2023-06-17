import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.routes').then(m => m.WELCOME_ROUTES),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
  }
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
];
