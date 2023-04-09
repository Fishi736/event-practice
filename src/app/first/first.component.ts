import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public api : AppService) { }

  ngOnInit(): void {
      this.api.getFullData().subscribe((res) => {
        console.log(res)
      })
  
  }




}
