import { Routes } from '@angular/router';
import { LandingComponent } from './features/pages/landing/landing.component';

export const routes: Routes = [
      { path: '', redirectTo: '/landing', pathMatch: 'full' }, 
      { path: '', loadComponent: () => import('././features/pages/landing/landing.component').then(m => m.LandingComponent) },  
      { path: '**', redirectTo: '', pathMatch: 'full' },
];
