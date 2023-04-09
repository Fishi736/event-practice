import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})


export class SaveComponent implements OnInit {
  eventForm: FormGroup;
  eventsList: any;

  constructor(fb: FormBuilder, public api: AppService) {

    this.eventForm = fb.group({
      name: ['', [Validators.required]],
      type: [''],
      date: [''],
      time: [''],
      numOfPersons: [''],
      link: [''],
      instructions: [''],
      venue: [''],
    });


  }

  ngOnInit(): void {
    this.getAllList('false')
  }

  getAllList(flag) {
    this.api.getList(flag).subscribe((res) => {
      console.log(res)
      this.eventsList = res;
    })
  }

  onSubmit() {
    console.log(this.eventForm.value);
    this.api.send(this.eventForm.value).subscribe((res) => {
      console.log(res)
      this.eventsList.push(res)
    })
  }









  trackByFn(index, item) {
    return item.id
  }








}
