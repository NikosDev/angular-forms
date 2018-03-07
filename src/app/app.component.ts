import { Component, Pipe, PipeTransform } from '@angular/core';
import { FilterPipe } from "./pipes/pipes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  filterArr = [];
  appointmentStatus = [{checked:false,status:'dispatched', color:'red'},{checked:false,status:'open', color:'blue'}, {checked:false,status:'closed', color:'green'}]
  color =[{checked:false,status:'red'},{checked:false,status:'blue'},{checked:false,status:'green'}]
  name:string;
  test: any = 'nik';

  allAppointments = [
    {id:1, status:'dispatched', color:'red'},
    {id:2, status:'dispatched', color:'blue'},
    {id:3, status:'dispatched', color:'green'},
    {id:4, status:'open', color:'blue'},
    {id:5, status:'open', color:'green'},
    {id:6, status:'closed', color:'red'}
  ]

  todaysAppointments = this.allAppointments;
  
  updateFilter(option) {
    if(!option.checked) {
      this.filterArr.push(option.status);
      console.log(this.filterArr);
    }
    else {
      let index = this.filterArr.indexOf(option.status);
      this.filterArr.splice(index, 1);
    }
  }
}
