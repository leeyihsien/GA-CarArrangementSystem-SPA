import { CarInfoService } from './../../_core/_services/car-info.service';
import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  constructor(private service : CarInfoService) { }

  carInfoData : any = [];


  ngOnInit(): void {
    this.refreshData();
  }


  refreshData(){
    this.service.getData().subscribe(data => {
      this.carInfoData = data;
      console.log(this.carInfoData);
    });
  }

}
