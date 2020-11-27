import { RouteInfoService } from './../../_core/_services/route-info.service';
import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.component.html',
})
export class RouteInfoComponent implements OnInit {

  constructor(private service : RouteInfoService) { }

  routeInfoData : any = []

  ngOnInit(): void {
    this.refreshData();
  }


  refreshData(){
    this.service.getData().subscribe ( data => {
      this.routeInfoData = data ;
      console.log(this.routeInfoData);
    })
  }

}
