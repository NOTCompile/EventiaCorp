import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'index',
    loadComponent: () => import('./shared/pages/index-page/index-page'),
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/pages/index-page/index-page'),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./admin/pages/dashboard-page/dashboard-page'),
      },
      {
        path: 'events',
        loadComponent: () => import('./admin/pages/events-page/events-page'),
      },
      {
        path: 'sales',
        loadComponent: () => import('./admin/pages/sales-page/sales-page'),
      },
      {
        path: 'clients',
        loadComponent: () => import('./admin/pages/clients-page/clients-page'),
      },
      {
        path: 'users',
        loadComponent: () => import('./admin/pages/users-page/users-page'),
      },
      {
        path: 'utilities',
        loadComponent: () => import('./admin/pages/utilities-page/utilities-page'),
      }
    ],
  },
  {
    path: 'control',
    loadComponent: () => import('./control/pages/index-page/index-page'),
  },
  {
    path: 'client',
    loadComponent: () => import('./client/pages/index-page/index-page'),
  },
  {
    path: '**',
    redirectTo: 'index',
  },
];
