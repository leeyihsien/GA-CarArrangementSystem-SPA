import { carInfo } from './../../../_core/_models/carInfo';
import { CarInfoService } from './../../../_core/_services/car-info.service';
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { data } from 'jquery';


@Component({
  selector: 'app-car-arrangement',
  templateUrl: './car-arrangement.component.html',
  styleUrls: ['./car-arrangement.component.css'],

})
export class CarArrangementComponent implements OnInit {

  carInfoData : any = [];

  full: boolean = true;

  constructor(private service : CarInfoService)  { }

  ngOnInit(): void {
    this.refreshData();
  }


  refreshData(){
    this.service.getData().subscribe(data => {
      this.carInfoData = data;
      console.log(this.carInfoData);
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
