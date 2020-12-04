import { DriverInfoComponent } from './driver-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    component:DriverInfoComponent,
    data :{
      title: 'Driver Info'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverInfoRoutingModule { }
