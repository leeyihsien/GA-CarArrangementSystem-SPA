import { DriverInfoService } from './../../../_core/_services/driver-info.service';
import { navItems } from './../../../_nav';
import { map } from 'rxjs/operators';
import { ArrangementInfoService } from './../../../_core/_services/arrangement-info.service';
import { RouteInfoService } from './../../../_core/_services/route-info.service';
import { carInfo } from './../../../_core/_models/carInfo';
import { CarInfoService } from './../../../_core/_services/car-info.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { data } from 'jquery';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import * as dragula from 'dragula';


@Component({
  selector: 'app-car-arrangement',
  templateUrl: './car-arrangement.component.html',
  styleUrls: ['./car-arrangement.component.css'],

})
export class CarArrangementComponent implements OnInit, OnDestroy {

  carInfoData : any = [];
  routeInfoData: any = [];
  arrangementData: any = [];
  driverInfoData: any = [];
  filter: any = [];
  driverId : string ;

  public arrangement: Array<any> = [
    {
      carId: 'no',
      data: []
    },

  ]





  ARRANGEMENT = "ARRANGEMENT";

  subs = new Subscription();


  full: boolean = true;

  constructor(private service : CarInfoService, private dragulaService: DragulaService, private routeService : RouteInfoService, private arrangementService : ArrangementInfoService, private driverInfoService:DriverInfoService )  {

  this.dragulaService.createGroup("ARRANGEMENT_COL", {
    direction: "horizontal",
    moves: (el, source, handle) => handle.className === "group-handle",

   })

   this.subs.add(
    dragulaService
      .dropModel(this.ARRANGEMENT)
      .subscribe(({ el, target, source, sourceModel, targetModel, item }) => {
        console.log("dropModel:");
        console.log(el);
        console.log(source);
        console.log(target);
        console.log(sourceModel);
        console.log(targetModel);
        console.log(item);


        //change the carId in arrangement
      const targetID = $(target).attr("id");
       item.carId = targetID


       //change the status
       item.arrangementStatus = 'success'


       //change driver
       item.driverId = this.arrangement.find( x => x.carId === targetID).pickdriver

       this.arrangementService.updateData(item).subscribe(res => {
        console.log(res.status)
      })

      console.log(item);



    })
  );

}



  ngOnInit(): void {
    let today = new Date().toISOString().slice(0, 10);
    this.refreshData(today);
  }

  ngOnDestroy() {
    this.dragulaService.destroy('ARRANGEMENT_COL');
}

  refreshData(searchdate: string){
    this.service.getData().subscribe(data => {
      this.carInfoData = data;
      console.log(this.carInfoData);

      var i : number;
      var num : number = this.carInfoData.length;

      for (i=0; i<num; i++){
        this.arrangement.push({
          carId: this.carInfoData[i].carId,
          carPassengerVolume: this.carInfoData[i].carPassengerVolume,
          pickdriver:"",
          data: [] })
        }
      console.log(this.arrangement);

    });


    this.routeService.getData().subscribe(data => {
      this.routeInfoData = data;
      console.log(this.routeInfoData);

    });

    this.driverInfoService.getData().subscribe( data => {
      this.driverInfoData = data;
      console.log(this.driverInfoData)


    })

  }



  search(){

    var i : number;
    var j : number;
    var num1 : number = this.arrangement.length;
    var num2 : number = this.arrangementData.length;
    var inputValue: string  = (<HTMLInputElement>document.getElementById("date-input")).value;


    this.emptyArray(this.arrangement);

    this.arrangementService.getByDate(inputValue).subscribe(item => {

      this.arrangementData = item;

      this.putIntoArray(this.arrangement, this.arrangementData)
      this.filter =  Array.from(new Set(this.arrangement[0].data.map(x => x.routeId)));


    });



    console.log(this.arrangement);
    console.log(this.filter)
  }


  emptyArray(arrangement: any){
    var i : number;
    var num1 : number = arrangement.length;

    for(i=0; i<num1; i++){
      arrangement[i].data = [];
      arrangement[i].pickdriver = "";
    }
  }


  putIntoArray(arrangement: any, arrangementData:any){
    var i : number;
    var j : number;
    var num1 : number = arrangement.length;
    var num2 : number = arrangementData.length;

    for (i=0; i<num1; i++){
      for(j=0; j<num2;j++){
        if (arrangement[i].carId == arrangementData[j].carId){
          arrangement[i].data.push(arrangementData[j])
          arrangement[i].pickdriver = arrangement[i].data[0].driverId;
        }

      }
    }
  }

  changeSelectedItem(filterVal: any, val:any, val2:any) {
    console.log(filterVal);
    console.log(val);
    console.log(val2);

    var i : number;
    var num1 : number = val2.length;

    for(i=0; i<num1; i++){
      val2[i].driverId = val;
      this.arrangementService.updateData(val2[i]).subscribe(res => {
        console.log(res.status)
      })
    }


    console.log(val2);
    console.log(this.arrangement)


  }



}

