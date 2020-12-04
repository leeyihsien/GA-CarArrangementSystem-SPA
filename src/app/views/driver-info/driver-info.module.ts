import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { AddEditDriverInfoComponent } from './add-edit-driver-info/add-edit-driver-info.component';
import { DriverInfoComponent } from './driver-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { DriverInfoRoutingModule } from './driver-info-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DriverInfoRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  declarations: [
    AddEditDriverInfoComponent,
    DriverInfoComponent
  ],

})
export class DriverInfoModule { }
