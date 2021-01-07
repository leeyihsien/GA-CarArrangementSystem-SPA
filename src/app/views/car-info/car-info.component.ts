import { AddEditCarInfoComponent } from './add-edit-car-info/add-edit-car-info.component';
import { CarInfoService } from './../../_core/_services/car-info.service';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, OnDestroy, AfterViewInit  } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';



@Component({
  selector: 'app-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.css']
})
export class CarInfoComponent implements AfterViewInit,OnDestroy, OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;

  AddEditCarInfo: boolean = false;
  ModalTitle: string;

  constructor(private service : CarInfoService) { }

  @ViewChild(DataTableDirective, {static: false})

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  carInfoData : any = [];
  newCar: any;

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


  refreshData(){
    this.service.getData().subscribe(data => {
      this.carInfoData = data;
      console.log(this.carInfoData);
      this.rerender();
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
    this.AddEditCarInfo = false;
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
