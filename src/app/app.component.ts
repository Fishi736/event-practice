import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-app';
  Opportunity=[];


  constructor(public http: HttpClient, public api: AppService) { 
    this.getData()
  }


  getData() {
    this.api.getFullData().subscribe((res) => {
      console.log(res)
      this.Opportunity = res.records;

    })

  }









}
