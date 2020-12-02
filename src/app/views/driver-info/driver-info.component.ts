import { DriverInfoService } from './../../_core/_services/driver-info.service';
import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';



@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
})
export class DriverInfoComponent implements OnInit {

  AddEditDriverInfo : boolean = false;
  ModalTitle: string;

  constructor(private service : DriverInfoService) { }

  driverInfoData : any = [];

  newDriver: any;

  ngOnInit(): void {
    this.refreshData();
  }

  addClick(){
    this.ModalTitle = 'Add New Driver';
    this.newDriver = {
      driverId:"",
      driverName:"",
      driverPhone:"",
      driverPhoto:"anonymous.png"
    }
    this.AddEditDriverInfo = true;
  }


  refreshData(){
    this.service.getData().subscribe ( data => {
      this.driverInfoData = data;
      console.log(this.driverInfoData);
    });
  }


  editClick(item){
    this.newDriver=item;
    this.ModalTitle = 'Edit Driver Info';
    this.AddEditDriverInfo = true;
  }

  closeClick(){
    this.refreshData();
    this.AddEditDriverInfo = false;
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
        this.service.deleteData(item.driverId).subscribe( data =>{
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
