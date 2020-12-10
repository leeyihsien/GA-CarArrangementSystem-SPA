import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionRoutingModule } from './transaction-routing.module';
import { CarBookingComponent } from './car-booking/car-booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DlDateTimeDateModule, DlDateTimePickerModule,DlDateTimeInputModule } from 'angular-bootstrap-datetimepicker';
import { CarArrangementComponent } from './car-arrangement/car-arrangement.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DragulaModule } from 'ng2-dragula';
import { TabsModule } from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [CarBookingComponent, CarArrangementComponent],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule,
    DlDateTimeInputModule,
    CollapseModule,
    DragulaModule.forRoot(),
    TabsModule
  ]
})
export class TransactionModule { }
