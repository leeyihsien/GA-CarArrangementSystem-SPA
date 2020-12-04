import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';


//import component
import { RouteInfoComponent } from './route-info.component';
import { AddEditRouteInfoComponent } from './add-edit-route-info/add-edit-route-info.component';



import { RouteInfoRoutingModule } from './route-info-routing.module';


@NgModule({

  imports: [
    CommonModule,
    RouteInfoRoutingModule,
    FormsModule,
    DataTablesModule,
  ],
  declarations: [
    RouteInfoComponent,
    AddEditRouteInfoComponent
  ]
})
export class RouteInfoModule { }
