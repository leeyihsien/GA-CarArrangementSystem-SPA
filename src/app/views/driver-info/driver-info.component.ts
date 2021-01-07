import { DriverInfoService } from './../../_core/_services/driver-info.service';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
})
export class DriverInfoComponent implements  AfterViewInit,OnDestroy,OnInit {

  @ViewChild('closeModal') closeModal: ElementRef;


  AddEditDriverInfo : boolean = false;
  ModalTitle: string;

  constructor(private service : DriverInfoService) { }

  @ViewChild(DataTableDirective, {static: false})

  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  driverInfoData : any = [];
  newDriver: any;

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
      this.rerender();
    });
  }


  editClick(item){
    this.newDriver=item;
    this.ModalTitle = 'Edit Driver Info';
    this.AddEditDriverInfo = true;
  }

  closeClick(){
    this.AddEditDriverInfo = false;
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
