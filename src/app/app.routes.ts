import {Routes} from '@angular/router';
import {SignUpPageComponent} from './presentation/features/sign-up-page/sign-up-page.component';

export const routes: Routes = [
  {
    path: '',
    component: SignUpPageComponent,
  },
  {
    path: 'sign-up',
    pathMatch: 'full',
    loadComponent: () => import('./presentation/features/sign-up-page/sign-up-page.component')
      .then(m => m.SignUpPageComponent),
  },
  {
    path: '*',
    component: SignUpPageComponent,
  }
];
