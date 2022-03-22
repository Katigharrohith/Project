import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppinsureserveService {

  httpBaseurl:string="'http://localhost:8089";

  constructor(private myhttp:HttpClient) { }
  claimdata()
  {
    return this.myhttp.get(this.httpBaseurl+"/claimInsurance");
  }

}
