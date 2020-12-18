


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

//import component
import { RouteInfoService } from './_core/_services/route-info.service';
import { DriverInfoService } from './_core/_services/driver-info.service';
import { CarDriverService } from './_core/_services/car-driver.service';
import { CarInfoService } from './_core/_services/car-info.service';
import { DriverInfoComponent } from './views/driver-info/driver-info.component';
import { CarDriverComponent } from './views/car-driver/car-driver.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    //設定路由
    path: 'carDriver',
    component : CarDriverComponent
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
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'routeInfo',
        loadChildren: () => import('./views/route-info/route-info.module').then(m => m.RouteInfoModule)
      },
      {
        path: 'carInfo',
        loadChildren: () => import('./views/car-info/car-info.module').then(m => m.CarInfoModule)
      },
      {
        path: 'driverInfo',
        loadChildren: () => import('./views/driver-info/driver-info.module').then(m => m.DriverInfoModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('./views/transaction/transaction.module').then(m => m.TransactionModule)
      },
      {
        path: 'query',
        loadChildren: () => import('./views/query/query.module').then(m => m.QueryModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
