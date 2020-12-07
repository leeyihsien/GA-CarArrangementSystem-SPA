import { RouteInfoService } from './../../_core/_services/route-info.service';
import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, Input, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { DataTablesModule } from 'angular-datatables';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-route-info',
  templateUrl: './route-info.component.html',
})
export class RouteInfoComponent implements AfterViewInit,OnDestroy, OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;

  AddEditRouteInfo : boolean = false;
  ModalTitle: string;


  constructor(private service: RouteInfoService) { }

  @ViewChild(DataTableDirective, {static: false})

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  routeInfoData : any = [];
  newRoute:any;


  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnInit(): void {
    this.refreshData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8
    };
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      // Destroy the table first
      dtInstance.destroy();
      // Call the dtTrigger to rerender again
      this.dtTrigger.next();
    });
  }


  addClick(){
    this.ModalTitle = 'Add New Route';
    this.newRoute = {
      routeId:"",
      routeName:"",
      routeStartingStation: "",
      routeTerminalStation: "",
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
      this.rerender();
    })
  }



  editClick(item){
    this.newRoute=item;
    this.ModalTitle = 'Edit Route Info';
    this.AddEditRouteInfo = true;

  }

  closeClick(){
    this.AddEditRouteInfo = false;
    this.closeModal.nativeElement.click();

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
