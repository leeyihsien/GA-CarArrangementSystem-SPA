import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteScheduleComponent } from './route-schedule.component';



const routes: Routes = [
  {
    path:'',
    component:RouteScheduleComponent,
    data :{
      title: 'Route Schedule'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteScheduleRoutingModule { }
