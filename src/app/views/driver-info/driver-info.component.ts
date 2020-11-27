import { DriverInfoService } from './../../_core/_services/driver-info.service';
import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
})
export class DriverInfoComponent implements OnInit {

  constructor(private serivce : DriverInfoService) { }

  driverInfoData : any = [];

  ngOnInit(): void {
    this.refreshData();
  }


  refreshData(){
    this.serivce.getData().subscribe ( data => {
      this.driverInfoData = data;
      console.log(this.driverInfoData);
    });
  }

}
