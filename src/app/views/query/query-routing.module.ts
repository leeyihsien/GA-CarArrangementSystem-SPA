import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassengerQueryComponent } from './passenger-query/passenger-query.component';
import { DriverQueryComponent } from './driver-query/driver-query.component';
import { ManagerQueryComponent } from './manager-query/manager-query.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Query'
    },
    children: [
      {
        path:'passenger',
        component:PassengerQueryComponent,
        data :{
          title: 'PassengerQuery'
        },
      },
      {
        path:'driver',
        component:DriverQueryComponent,
        data :{
          title: 'DriverQuery'
        },
      },
      {
        path:'manager',
        component:ManagerQueryComponent,
        data :{
          title: 'ManagerQuery'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QueryRoutingModule { }
