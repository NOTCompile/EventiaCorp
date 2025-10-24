import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'index',
        loadComponent: () => import('./shared/pages/index-page/index-page'),
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin/pages/index-page/index-page')
    },
    {
        path: 'control',
        loadComponent: () => import('./control/pages/index-page/index-page')
    },
    {
        path: 'client',
        loadComponent: () => import('./client/pages/index-page/index-page')
    },
    {
        path: '**',
        redirectTo: 'index',
    }
];
