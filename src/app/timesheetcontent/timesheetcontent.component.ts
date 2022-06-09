import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheetcontent',
  templateUrl: './timesheetcontent.component.html',
  styleUrls: ['./timesheetcontent.component.css']
})
export class TimesheetcontentComponent implements OnInit {

  constructor() { }

  // createobj = {};
  createobj: any = {
    projectName: "",
    activity: "",
    task: "",
    mon: "",
    tue: "",
    wed: "",
    thu: "",
    fri: "",
    sat: ""
  }

  dataArry = [];
  addForm() {

  }


  ngOnInit(): void {
    this.dataArry.push(this.createobj)
  }

}
