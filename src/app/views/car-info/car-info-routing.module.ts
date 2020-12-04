import { CarInfoComponent } from './car-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'',
    component:CarInfoComponent,
    data :{
      title: 'Car Info'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarInfoRoutingModule { }
