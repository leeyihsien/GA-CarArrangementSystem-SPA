import { RouteInfoService } from './../../_core/_services/route-info.service';
import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.component.html',
})
export class RouteInfoComponent implements OnInit {

  // @ViewChild('largeModal') public largeModal: ModalDirective;


  constructor(private service: RouteInfoService) { }

  routeInfoData : any = [];

  ModalTitle: string;
  ActivateAddEditRouteComp: boolean = false;

  newRoute:any;
  routeId: string;
  routeName:string;
  routeStart: string;
  routeEnd: string;
  routeCostTime: number;
  routeOneWay: boolean;
  routeRoundTrip: boolean;
  routeRemark: string;


  ngOnInit(): void {
    this.refreshData();

  }


  refreshData(){
    this.service.getData().subscribe ( data => {
      this.routeInfoData = data ;
      console.log(this.routeInfoData);
    })
  }

  addClick(){
    this.newRoute = {
      routeId:"",
      routeName:"",
      routeStart: "",
      routeEnd: "",
      routeCostTime: 0,
      routeOneWay: false,
      routeRoundTrip: false,
      routeRemark: ""
    }

  }

  editClick(item){
    this.newRoute=item;

  }

  closeClick(){
    this.ActivateAddEditRouteComp=false;
    this.refreshData();
  }

  deleteClick(){

  }


  getRouteType(){

  }

}
