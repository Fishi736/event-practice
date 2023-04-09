import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from './dataInterface';
import { responseFormat } from './responseFormat';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseurl = "http://localhost:3000"

  response: any = {};
  private messageResponse = new BehaviorSubject(this.response);
  currentResponse = this.messageResponse.asObservable();
  url = 'https://sdapi.songdew.com/apis/opportunity-v2/?oppor_type=&offset=0&limit=18&keyword=&sort_by=featured&category=2'

  constructor(public http: HttpClient) {

  }


  getFullData(): Observable<Data> {
    return this.http.get<Data>(this.url)
  }

  getList(flag) {
    let params = new HttpParams().set('download', flag)
    return this.http.get(this.baseurl + "/eventsList", { params: params }
    );
  }
  send(event) {
    return this.http.post(this.baseurl + "/addevent", event,
    );
  }




}
