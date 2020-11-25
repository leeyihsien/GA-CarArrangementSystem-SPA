import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';



//import service

import { CarArrangementInfoService } from './../../_core/_services/car-arrangement-info.service';


@Component({
  selector: 'app-arrangement-info',
  templateUrl: './arrangement-info.component.html',
  styleUrls: ['./arrangement-info.component.css']
})
export class ArrangementInfoComponent implements OnInit {

// 在建構子中傳入service

  constructor(private service : CarArrangementInfoService) { }

  //宣告變數
  arrangementData : any[] = [];


  ngOnInit(): void {
    this.refreshData();

  }

  refreshData(){
    this.service.getData().subscribe(data => {
      this.arrangementData = data;
    }
    );
  }

}
