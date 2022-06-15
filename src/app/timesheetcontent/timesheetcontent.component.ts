import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-timesheetcontent',
  templateUrl: './timesheetcontent.component.html',
  styleUrls: ['./timesheetcontent.component.css']
})
export class TimesheetcontentComponent implements OnInit {
  taskData: FormGroup;


  constructor(public fb: FormBuilder) {

    // var items = new FormArray([
    //   this.taskData = this.fb.group({
    //     projectName: [""],
    //     activity: [""],
    //     task: [""],
    //     mon: [""],
    //     tue: [""],
    //     wed: [""],
    //     thu: [""],
    //     fri: [""],
    //     sat: [""]

    //   })

    // ])
  }
  addForm() {

    this.formArry.push(this.initItemRow())

  }


  ngOnInit(): void {
    this.taskData = this.fb.group({
      //create a itemrows control in formgroup
      itemRows: this.fb.array([this.initItemRow()])

    })
  }
  get formArry() {
    return this.taskData.get("itemRows") as FormArray;
  }
  initItemRow() {
    return this.fb.group({
      projectName: [""],
      activity: [""],
      task: [""],
      mon: [""],
      tue: [""],
      wed: [""],
      thu: [""],
      fri: [""],
      sat: [""]
    })
  }




}


