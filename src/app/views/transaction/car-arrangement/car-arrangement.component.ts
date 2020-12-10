import { ArrangementInfoService } from './../../../_core/_services/arrangement-info.service';
import { RouteInfoService } from './../../../_core/_services/route-info.service';
import { carInfo } from './../../../_core/_models/carInfo';
import { CarInfoService } from './../../../_core/_services/car-info.service';
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { data } from 'jquery';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-car-arrangement',
  templateUrl: './car-arrangement.component.html',
  styleUrls: ['./car-arrangement.component.css'],

})
export class CarArrangementComponent implements OnInit {

  carInfoData : any = [];
  routeInfoData: any = [];
  arrangementData: any = [];


  full: boolean = true;

  constructor(private service : CarInfoService, private dragulaService: DragulaService, private routeService : RouteInfoService, private arrangementService : ArrangementInfoService)  {
    this.dragulaService.createGroup("USER", {
      // ...
    });

    this.dragulaService.dropModel("USER").subscribe(args => {
      console.log(args);
    });


   }

  ngOnInit(): void {
    this.refreshData();
  }


  refreshData(){
    this.service.getData().subscribe(data => {
      this.carInfoData = data;
      console.log(this.carInfoData);
    });


    this.routeService.getData().subscribe(data => {
      this.routeInfoData = data;
      console.log(this.routeInfoData);
    });

    this.arrangementService.getData().subscribe(data => {
      this.arrangementData = data;
      console.log(this.arrangementData);
    });
  }

  test(val: string){
    alert(val);
  }


  trackByIndex(index, carInfo){
    return carInfo.carId;
  }


  public isCollapsed: boolean[] = [];


  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

}
