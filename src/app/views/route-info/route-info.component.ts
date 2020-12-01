import { RouteInfoService } from './../../_core/_services/route-info.service';
import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';



@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.component.html',
})
export class RouteInfoComponent implements OnInit {

  AddEditRouteInfo : boolean = false;
  ModalTitle: string;


  constructor(private service: RouteInfoService) { }

  routeInfoData : any = [];


  newRoute:any;


  ngOnInit(): void {
    this.refreshData();
  }


  addClick(){
    this.ModalTitle = 'Add New Route';
    this.newRoute = {
      routeId:"",
      routeName:"",
      routeStart: "",
      routeEnd: "",
      routeCostTime: 0,
      routeType:"",
      routeRemark: ""
    }
    this.AddEditRouteInfo = true;

  }


  refreshData(){
    this.service.getData().subscribe ( data => {
      this.routeInfoData = data ;
      console.log(this.routeInfoData);
    })
  }



  editClick(item){
    this.newRoute=item;
    this.ModalTitle = 'Edit Route Info';
    this.AddEditRouteInfo = true;
  }

  closeClick(){
    this.refreshData();
    this.AddEditRouteInfo = false;

  }

  deleteClick(item){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteData(item.routeId).subscribe( data =>{
          this.refreshData();
        });
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  }


}
