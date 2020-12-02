import { CarInfoService } from './../../../_core/_services/car-info.service';
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-add-edit-car-info',
  templateUrl: './add-edit-car-info.component.html',
  styleUrls: ['./add-edit-car-info.component.css']
})
export class AddEditCarInfoComponent implements OnInit {

  constructor(private service: CarInfoService) { }

  @Input() newCar: any;
  carId: string;
  carBrand: string;
  carOwner: string;
  carPassengerVolume: number;

  ngOnInit(): void {
    this.carId = this.newCar.carId;
    this.carBrand = this.newCar.carBrand;
    this.carOwner = this.newCar.carOwner;
    this.carPassengerVolume = this.newCar.carPassengerVolume;
  }


  addNewCar(){
    var val = {
      carId: this.carId,
      carBrand: this.carBrand,
      carOwner: this.carOwner,
      carPassengerVolume: this.carPassengerVolume
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




  updateCar(){
    var val = {
      carId: this.carId,
      carBrand: this.carBrand,
      carOwner: this.carOwner,
      carPassengerVolume: this.carPassengerVolume
    }

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
