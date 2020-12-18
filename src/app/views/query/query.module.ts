import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QueryRoutingModule } from './query-routing.module';
import { PassengerQueryComponent } from './passenger-query/passenger-query.component';
import { DriverQueryComponent } from './driver-query/driver-query.component';
import { ManagerQueryComponent } from './manager-query/manager-query.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [PassengerQueryComponent, DriverQueryComponent, ManagerQueryComponent],
  imports: [
    CommonModule,
    QueryRoutingModule,
    FormsModule,
  ]
})
export class QueryModule { }
