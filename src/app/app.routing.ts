import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "./security/auth.guard";

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { SecureInnerPagesGuard } from './security/secure-inner-pages.guard';
import { LogoutComponent } from './views/logout/logout.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    },
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Beranda'
    },
    children: [
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/forms.module').then(m => m.FormModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'datas',
        loadChildren: () => import('./views/datas/datas.module').then(m => m.DatasModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard]
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
