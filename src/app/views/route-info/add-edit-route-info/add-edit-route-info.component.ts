import { RouteInfoService } from './../../../_core/_services/route-info.service';
import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';




@Component({
  selector: 'app-add-edit-route-info',
  templateUrl: './add-edit-route-info.component.html',
  styleUrls: ['./add-edit-route-info.component.css']
})
export class AddEditRouteInfoComponent implements OnInit {


  constructor(private service:RouteInfoService) { }


  @Input() newRoute: any ;
  routeId: string;
  routeName:string;
  routeStart: string;
  routeEnd: string;
  routeCostTime: number;
  routeType: string;
  routeRemark: string;


  ngOnInit(): void {
    this.routeId = this.newRoute.routeId;
    this.routeName = this.newRoute.routeName;
    this.routeStart = this.newRoute.routeStart;
    this.routeEnd = this.newRoute.routeEnd;
    this.routeCostTime = this.newRoute.routeCostTime;
    this.routeType = this.newRoute.routeType;
    this.routeRemark = this.newRoute.routeRemark;
  }


  addNewRoute(){
    var val = {
    routeId: this.routeId,
    routeName: this.routeName,
    routeStart: this.routeStart,
    routeEnd :  this.routeEnd,
    routeCostTime: this.routeCostTime,
    routeType: this.routeType,
    routeRemark :this.routeRemark
    }
    this.service.addData(val).subscribe(res => {
      console.log(res.status)
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
    },
    err => {
      console.log('error',err.status)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        timer: 1500
      })
    }
  );
  }


  updateRoute(){
    var val = { routeId: this.routeId,
      routeName: this.routeName,
      routeStart: this.routeStart,
      routeEnd : this.routeEnd,
      routeCostTime: this.routeCostTime,
      routeType: this.routeType,
      routeRemark : this.routeRemark}

      this.service.updateData(val).subscribe(res => {
        console.log(res.status)
          Swal.fire({
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
      },
      err => {
        console.log('error',err.status)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          timer: 1500
        })
      });

  }

}
