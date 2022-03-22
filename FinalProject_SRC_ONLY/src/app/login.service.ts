import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { login } from './login/login';
import { Observable, of as observableOf } from 'rxjs';
import { LoginStatus } from './login/LoginStatus';
import { Insurance } from './insurance';
import { AppInsurance } from './app-insurance';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpBaseurl:string="http://localhost:8089";
  
  constructor(private http: HttpClient) { }

  userLogin(logindata:login): Observable<LoginStatus>{
    let url = 'http://localhost:8089/login';
    return this.http.post<LoginStatus>(url, logindata);

  }
  getdata(insurance:Insurance)
  {
    return this.http.post(this.httpBaseurl+"/applyInsurance",insurance);
  }
  claimdata(appins:AppInsurance)
  {
    return this.http.post(this.httpBaseurl+"/claimInsurance",appins);
  }
  
}
