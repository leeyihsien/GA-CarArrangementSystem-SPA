import { ArrangementInfoService } from './../../../_core/_services/arrangement-info.service';
import { RouteInfoService } from './../../../_core/_services/route-info.service';
import { carInfo } from './../../../_core/_models/carInfo';
import { CarInfoService } from './../../../_core/_services/car-info.service';
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { data } from 'jquery';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-car-arrangement',
  templateUrl: './car-arrangement.component.html',
  styleUrls: ['./car-arrangement.component.css'],

})
export class CarArrangementComponent implements OnInit {

  carInfoData : any = [];
  routeInfoData: any = [];
  arrangementData: any = [];
  okarrangementData: any =[];
  ARRANGEMENT = "ARRANGEMENT";

  subs = new Subscription();


  full: boolean = true;

  constructor(private service : CarInfoService, private dragulaService: DragulaService, private routeService : RouteInfoService, private arrangementService : ArrangementInfoService)  {

  //   this.subs.add(this.dragulaService.drag("ARRANGEMENT")
  //   .subscribe(({ name, el, source }) => {
  //     // ...
  //     console.log({ name, el, source })
  //   })
  // );
  // this.subs.add(this.dragulaService.drop("ARRANGEMENT")
  //   .subscribe(({ name, el, target, source, sibling }) => {
  //     // ...
  //     console.log({ name, el, source })

  //   })
  // );
  // some events have lots of properties, just pick the ones you need
  this.dragulaService.dropModel()
    // WHOA
    // .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
    .subscribe((value) => {
      // ...

      console.log(value.item.arrangementId)

    })
  ;

  }

  private onDropModel(args) {
    //Here, this.playlists contains the elements reordered
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

    this.arrangementService.getNullStatus().subscribe(data => {
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
