import { RouteScheduleService } from './../../_core/_services/route-schedule.service';
import { Component, OnInit, TemplateRef,ElementRef, ViewChild } from '@angular/core';
import {FullCalendarComponent, CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput  } from '@fullcalendar/angular'; // useful for typechecking
import {BsModalService,BsModalRef} from 'ngx-bootstrap/modal';


import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
declare var $ : any;



@Component({
  selector: 'app-route-schedule',
  templateUrl: './route-schedule.component.html',
  styleUrls: ['./route-schedule.component.css']
})
export class RouteScheduleComponent implements OnInit{

  @ViewChild('editModal') public editModal  : TemplateRef<any>;
  @ViewChild('addModal') public addModal  : TemplateRef<any>;
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  //Edit Event
  name:string;
  date:string;
  time:string;
  id:number;
  daysOfWeek:any = [];
  events: EventInput[] = [];
  eventGuid:number;
  currentEvents: EventApi[] = [];


  // Modal
  modalRef: BsModalRef;



  constructor(private modalService : BsModalService, private routeScheduleService: RouteScheduleService) {}

  ngOnInit(): void {
    this.refreshData();
  }


  //Calendar Option
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev today next',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    timeZone: 'UTC',
    themeSystem: 'bootstrap',
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.handleDateSelect.bind(this), // bind is important!
    eventClick: this.eventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
    eventChange: this.updateClick.bind(this),
    eventAdd: this.eventAdd.bind(this)
     /* you can update a remote database when these fire:
    eventAdd:
    eventRemove:
    */
  };


  // Calendar Method (Event CRUD)
  refreshData(){
    this.routeScheduleService.getData().subscribe ( data => {
      console.log(data);

      var i : number = 0;
      var num :number = data.length;
      var events =[]

      for (i=0; i<num; i++){

        if (data[i].dayOfWeek != null){
          events.push( {
            id: (data[i].eventId).toString(),
            title: data[i].routeId,
            start: data[i].startDate,
            // daysOfWeek: [data[i].dayOfWeek]
            daysOfWeek: data[i].dayOfWeek

          })
        } else {
          events.push( {
            id: (data[i].eventId).toString(),
            title: data[i].routeId,
            start: data[i].startDate,
          })
        }
      }

      this.eventGuid = data[data.length -1].eventId
      this.calendarOptions.events = events;
      var test:number[] = [1,2,3]
      console.log(data[0].dayOfWeek)
      console.log(test.toString())


    })
  }

  handleDateSelect(arg) {
    // const title = prompt('Please enter a new title for your event');
    // let calendarApi = this.calendarComponent.getApi();
    // calendarApi.addEvent({
    //     id: this.createEventId(),
    //     title,
    //     start  : arg.dateStr,
    // })
    this.openModal( this.addModal);
  }

  eventAdd(model){
    var data: any = {
      eventId: model.event.id,
      routeId: model.event.title,
      startDate: model.event.start,
    }
    this.routeScheduleService.addData(data).subscribe(data =>{
      console.log(data);
    });
    console.log(data) ;
  }


  eventClick(model) {
    this.date = (model.event.start.toISOString()).slice(0,10);
    this.time = (model.event.start.toISOString()).slice(11,16);
    this.id = (model.event.id);
    this.name = model.event.title;

    this.openModal( this.editModal);
  }


  deleteClick(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.routeScheduleService.deleteData(id).subscribe( data =>{
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
    this.modalService.hide(1);
    console.log(id);
  }


  setCheckbox(event: any, value: any) {
    if (event.target.checked)
      this.daysOfWeek.push(value)
    else{
     this.daysOfWeek= this.daysOfWeek.filter(val => val != value);
    }

    console.log(this.daysOfWeek)
  }

  save() {
    console.log(this.daysOfWeek);
  }

  updateClick(model){
    console.log(model.event.start);
    console.log(model.event.id)
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
    console.log(this.currentEvents)
  }


  createEventId() {
    return String(this.eventGuid + 1);
  }




}
