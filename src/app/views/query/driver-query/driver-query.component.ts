import { DriverInfoService } from './../../../_core/_services/driver-info.service';
import { RouteInfoService } from './../../../_core/_services/route-info.service';
import { data } from 'jquery';
import { CarInfoService } from './../../../_core/_services/car-info.service';
import { ArrangementInfoService } from './../../../_core/_services/arrangement-info.service';
import {Component, ElementRef, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ModalDirective } from 'ngx-bootstrap/modal';




@Component({
  selector: 'app-driver-query',
  templateUrl: './driver-query.component.html',
  styleUrls: ['./driver-query.component.css'],
})
export class DriverQueryComponent implements OnInit {

  @ViewChild('infoModal') public infoModal: ModalDirective;


  constructor(private service: ArrangementInfoService, private carService :CarInfoService, private routeService: RouteInfoService, private driverService: DriverInfoService) { }

  @ViewChild(DataTableDirective, {static: false})

  dtElement: DataTableDirective;
  dtOptions:  DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();


  arrangementInfoData : any = [];
  carInfoData: any = [];
  routeInfoData: any = [];
  driverInfoData: any = [];
  input_car : string ;
  input_date : string;

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnInit(): void {
    this.refreshData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
    };
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }

  refreshData(){
    this.service.getData().subscribe(data => {
     this.arrangementInfoData = data
      console.log(this.arrangementInfoData);
      this.rerender();
    });

    this.carService.getData().subscribe(data =>{
      this.carInfoData = data
      console.log(this.carInfoData)
  });


  this.routeService.getData().subscribe(data => {
    this.routeInfoData = data;
    console.log(this.routeInfoData);
  })

  this.driverService.getData().subscribe( data => {
    this.driverInfoData = data
    console.log(this.driverInfoData);
  })


}

  search (event){
    this.service.getByDateAndCar(this.input_car, this.input_date).subscribe(data => {
      this.arrangementInfoData = data;
      console.log(this.arrangementInfoData);
      this.rerender();
    });
  }



  findCarDetail(data){
      return this.carInfoData.filter(x => x.carId === data.carId)

  }

  findRouteDetail(data){
    return this.routeInfoData.filter(x => x.routeId === data.routeId)

  }

  findDriverDetail(data){
    return this.driverInfoData.filter(x => x.driverId === data.driverId)

  }


}
