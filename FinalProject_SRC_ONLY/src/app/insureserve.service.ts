import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsureserveService {
  httpBaseurl:string="http://localhost:8089";

  constructor(private myhttp:HttpClient) { }
  getdata()
  {
    return this.myhttp.get(this.httpBaseurl+"/applyInsurance");
  }


  
}
