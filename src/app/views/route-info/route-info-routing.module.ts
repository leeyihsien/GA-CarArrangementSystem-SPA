import { RouteInfoComponent } from './route-info.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    component:RouteInfoComponent,
    data :{
      title: 'Route Info'
    },
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteInfoRoutingModule { }
