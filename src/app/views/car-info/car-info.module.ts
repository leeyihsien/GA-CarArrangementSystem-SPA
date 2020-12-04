import { AddEditCarInfoComponent } from './add-edit-car-info/add-edit-car-info.component';
import { CarInfoComponent } from './car-info.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';



import { CarInfoRoutingModule } from './car-info-routing.module';


@NgModule({
  imports: [
    CommonModule,
    CarInfoRoutingModule,
    FormsModule,
    DataTablesModule
  ],

  declarations: [
    AddEditCarInfoComponent,
    CarInfoComponent
  ],
})
export class CarInfoModule { }
