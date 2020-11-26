import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';



// import service

import { CarArrangementInfoService } from './../../_core/_services/car-arrangement-info.service';


@Component({
  selector: 'app-arrangement-info',
  templateUrl: './arrangement-info.component.html',
})
export class ArrangementInfoComponent implements OnInit {

  pagination: Pagination;



// 在建構子中傳入service

  constructor(private service : CarArrangementInfoService) { }

  //宣告變數
  arrangementData : any = [];


  ngOnInit(): void {
    this.refreshData();
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: 0,
      totalPages: 0
    };

  }

  refreshData(){
    this.service.getData().subscribe(data => {
      this.arrangementData = data;
      console.log(this.arrangementData);
    }
    );
  }

  //  refreshData(){
  //   this.service.getData(this.pagination.currentPage , this.pagination.itemsPerPage)
  //   .subscribe( (data: PaginatedResult<any[]>) => {
  //     this.arrangementData = data.result;
  //     this.pagination = data.pagination;
  //     console.log(this.arrangementData);
  //   }
  //   );
  // }

  // pageChanged(event: any): void {
  //   this.pagination.currentPage = event.page;
  //   this.refreshData();
  // }
}
