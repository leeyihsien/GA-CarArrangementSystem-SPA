import { AddEditCarInfoComponent } from './add-edit-car-info/add-edit-car-info.component';
import { CarInfoService } from './../../_core/_services/car-info.service';
import { Pagination, PaginatedResult } from './../../_core/_models/pagination';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements OnInit {

  AddEditCarInfo: boolean = false;
  ModalTitle: string;

  constructor(private service : CarInfoService) { }

  carInfoData : any = [];

  newCar: any;


  ngOnInit(): void {
    this.refreshData();
  }


  refreshData(){
    this.service.getData().subscribe(data => {
      this.carInfoData = data;
      console.log(this.carInfoData);
    });
  }

  addClick(){
    this.ModalTitle = 'Add New Car';
    this.newCar = {
      carId : "",
      carBrand : "",
      carOwner : "",
      carPassengerVolume : 0
    }
    this.AddEditCarInfo = true;

  }

  editClick(item){
    this.newCar = item;
    this.ModalTitle = 'Edit Car Info';
    this.AddEditCarInfo = true;
  }

  closeClick(){
    this.refreshData();
    this.AddEditCarInfo = false;
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
        this.service.deleteData(item.carId).subscribe( data =>{
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
