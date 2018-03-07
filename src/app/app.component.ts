import { Component, Pipe, PipeTransform } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  filterArr = [];
  cpuName = [{checked:false,name:'Intel'},{checked:false,name:'AMD'}]
  cpuCode =[{checked:false,name:'i5'},{checked:false,name:'i7'},{checked:false,name:'ryzen7'}]
  name:string;

  allCpu = [
    {id:1, name:'Intel', code:'i5'},
    {id:2, name:'Intel', code:'i5'},
    {id:3, name:'AMD', code:'ryzen7'},
    {id:4, name:'Intel', code:'i7'},
    {id:5, name:'AMD', code:'ryzen7'},
    {id:6, name:'Intel', code:'i7'}
  ]

  
  updateFilter(option) {
    if(!option.checked) {
      this.filterArr.push(option.name);
      console.log(this.filterArr);
    }
    else {
      let index = this.filterArr.indexOf(option.name);
      this.filterArr.splice(index, 1);
    }
  }
}
