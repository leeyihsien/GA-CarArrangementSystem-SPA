import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


//import service
import { CarDriverService } from './../../_core/_services/car-driver.service';


@Component({
  selector: 'app-car-driver',
  templateUrl: './car-driver.component.html',
})
export class CarDriverComponent implements OnInit {

  constructor(private service : CarDriverService) { }


  carDriverData: any = [];


  ngOnInit(): void {

    this.refreshData();
  }

  refreshData(){
    this.service.getData().subscribe (data => {
      this.carDriverData = data;
      console.log(this.carDriverData);
    })
  }

}
