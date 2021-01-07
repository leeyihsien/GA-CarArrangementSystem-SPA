import { RouteInfoService } from './../../../_core/_services/route-info.service';
import { DriverInfoService } from './../../../_core/_services/driver-info.service';
import { CarInfoService } from './../../../_core/_services/car-info.service';
import {Component, ElementRef, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { ArrangementInfoService } from './../../../_core/_services/arrangement-info.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';



@Component({
  selector: 'app-manager-query',
  templateUrl: './manager-query.component.html',
  styleUrls: ['./manager-query.component.css']
})
export class ManagerQueryComponent implements OnInit {

  @ViewChild('infoModal') public infoModal: ModalDirective;

  constructor(private service: ArrangementInfoService, private routeService: RouteInfoService, private carService :CarInfoService,  private driverService: DriverInfoService) { }

  @ViewChild(DataTableDirective, {static: false})

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  arrangementInfoData : any = [];
  routeInfoData : any = [];
  driverInfoData: any = [];
  carInfoData: any = [];


  input_route : string ;
  input_date : string;


  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnInit(): void {
    this.refreshData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8
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
      this.arrangementInfoData = data;
      console.log(this.arrangementInfoData);
      this.rerender();
    });

    this.routeService.getData().subscribe( data => {
      this.routeInfoData = data;
    })

    this.driverService.getData().subscribe( data => {
      this.driverInfoData = data
      console.log(this.driverInfoData);
    })

    this.carService.getData().subscribe(data =>{
      this.carInfoData = data
      console.log(this.carInfoData)
  });

  }

  search (event){
    this.service.getByDateAndRoute(this.input_route, this.input_date).subscribe(data => {
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
