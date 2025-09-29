import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'inicio-sesion',
        loadComponent: () => import('./pages/sesion-page/sesion-page.component'),
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard-page/dashboard-page.component')
    },
    {
        path: 'eventos',
        loadComponent: () => import('./pages/eventos-page/eventos-page.component')
    },
    {
        path: 'lista-evento-item',
        loadComponent: () => import('./components/lista-evento/lista-evento-item/lista-evento-item.component')
    },
    {
        path: 'lista-boletos',
        loadComponent: () => import('./pages/boletos-page/boletos-page.component')
    },
    {
        path: 'lista-asistentes',
        loadComponent: () => import('./pages/asistentes-page/asistentes-page.component')
    },
    {
        path: '**',
        redirectTo: 'inicio-sesion',
    }
];
