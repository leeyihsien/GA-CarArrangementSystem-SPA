import { DriverInfoComponent } from './../driver-info.component';
import { DriverInfoService } from './../../../_core/_services/driver-info.service';
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';



@Component({
  selector: 'app-add-edit-driver-info',
  templateUrl: './add-edit-driver-info.component.html',
  styleUrls: ['./add-edit-driver-info.component.css']
})
export class AddEditDriverInfoComponent implements OnInit {

  constructor(private service: DriverInfoService, private component: DriverInfoComponent ) { }

  @Input() newDriver: any ;
  driverId: string;
  driverName: string;
  driverPhone: string;
  driverPhoto: string;
  driverPhotoFilePath:string;


  ngOnInit(): void {
    this.driverId = this.newDriver.driverId;
    this.driverName = this.newDriver.driverName;
    this.driverPhone = this.newDriver.driverPhone;
    this.driverPhoto = this.newDriver.driverPhoto;
    this.driverPhotoFilePath = this.service.imageUrl + this.driverPhoto;
  }

  addNewDriver(){
    var val = {
      driverId: this.driverId,
      driverName: this.driverName,
      driverPhone: this.driverPhone,
      driverPhoto: this.driverPhoto
    }
    this.service.addData(val).subscribe(res => {
      console.log(res.status)
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.component.closeClick();
        this.component.refreshData();
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

  updateDriver(){
    var val = {
      driverId: this.driverId,
      driverName: this.driverName,
      driverPhone: this.driverPhone,
      driverPhoto: this.driverPhoto
    }
    this.service.updateData(val).subscribe(res => {
      console.log(res.status)
        Swal.fire({
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
        this.component.closeClick();
        this.component.refreshData();
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

  uploadImage(event){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadFile',file,file.name);

    this.service.uploadImage(formData).subscribe( (data:any) => {
      this.driverPhoto = data.toString();
      this.driverPhotoFilePath = this.service.imageUrl + this.driverPhoto;
    })
  }

}
