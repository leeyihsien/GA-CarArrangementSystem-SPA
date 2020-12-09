import { CarArrangementComponent } from './car-arrangement/car-arrangement.component';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Transaction'
    },
    children: [
      {
        path:'carBooking',
        component:CarBookingComponent,
        data :{
          title: 'CarBooking'
        },
      },
      {
        path:'carArrangement',
        component:CarArrangementComponent,
        data :{
          title: 'CarArrangement'
        },
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
