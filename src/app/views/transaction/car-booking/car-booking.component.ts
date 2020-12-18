import { RouteInfoService } from './../../../_core/_services/route-info.service';
import { ArrangementInfoService } from './../../../_core/_services/arrangement-info.service';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { DateButton } from 'angular-bootstrap-datetimepicker';
import * as _moment from 'moment';
import { unitOfTime } from 'moment';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';


declare var $: any;

let moment = _moment;

if ('default' in _moment) {
  moment = _moment['default'];
}



@Component({
  selector: 'app-car-booking',
  templateUrl: './car-booking.component.html',
  styleUrls: ['./car-booking.component.css']
})
export class CarBookingComponent implements OnInit, AfterViewInit{

  disablePastDates = true;
  startView: string = 'day';
  minuteStep: string = '15';
  private _isPickerOpen = false;
  showCalendar = true;
  routeType: string ;

  @Input() newBooking: any;
  arrangementId: string;
  userId: string;
  userName: string;
  userPhone: string;
  routeId: string;
  departureTime: Date;
  carId: string;
  driverId: string;
  arrangementStatus: string;
  arrangementRemark: string;

  Backroutes = [];
  Leaveroutes = [];

  // tslint:disable-next-line: max-line-length
  constructor(private arrangementInfoService: ArrangementInfoService, private routeInfoService: RouteInfoService, private elementRef: ElementRef) {
    this.routeInfoService.getType('leave').subscribe(data =>
      this.Leaveroutes = data);

      this.routeInfoService.getType('back').subscribe(data =>
        this.Backroutes = data);
  }




  ngAfterViewInit(): void {
    const dropdownToggle = $(
      '[data-toggle="dropdown"]',
      this.elementRef.nativeElement
    );
    dropdownToggle.parent().on('show.bs.dropdown', () => {
      this._isPickerOpen = true;
    });

    dropdownToggle.parent().on('hide.bs.dropdown', () => {
      this._isPickerOpen = false;
    });
  }

  dateInputFilter = (value: number | null) => {
    return this.disablePastDates ? value >= moment().valueOf() : true;
  };

  datePickerFilter = (dateButton: DateButton, viewName: string) => {
    return this.disablePastDates
      ? dateButton.value >=
          moment()
            .startOf(viewName as unitOfTime.StartOf)
            .valueOf()
      : true;
  };

  keepDropDownOpen(event: Event) {
    event.stopPropagation();
  }



  refreshDatePicker() {
    this.departureTime = null;
    this.startView = 'day';
    this.showCalendar = false;
    this.minuteStep = '15';
    setTimeout(() => this.showCalendar = true, 100);
  }

  dateSelected(event) {
    console.log("_isDropdownVisible", this._isPickerOpen);
    if (this._isPickerOpen && event.value) {
      $(".date-dropdown").dropdown("toggle");
    }
  }


  ngOnInit(): void {
    //預設值
    // this.arrangementId = this.newBooking.arrangementId;
    // this.userId = this.newBooking.userId;
    // this.userName = this.newBooking.userName;
    // this.userPhone = this.newBooking.userPhone;
    // this.routeId = this.newBooking.routeId;
    // this.departureTime = this.newBooking.departureTime;
    this.carId = 'no';
    // this.driverId = this.newBooking.driverId;
     this.arrangementStatus = 'test';
    // this.arrangementRemark = this.newBooking.arrangementRemark;
  }


  addBooking(){
    var val = {
      arrangementId: this.arrangementId,
      userId : this.userId,
      userName : this.userName,
      userPhone : this.userPhone,
      routeId : this.routeId,
      departureTime : this.departureTime,
      carId : this.carId,
      driverId : this.driverId,
      arrangementStatus : this.arrangementStatus,
      arrangementRemark : this.arrangementRemark
    }
    this.arrangementInfoService.addData(val).subscribe(res => {
      console.log(res.status)
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.ngOnInit();
    },
    err => {
      console.log('error',err.status)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timer: 1500
      })
    }
  );

  }





}
