import { Component, OnInit } from '@angular/core';
import { AppinsureserveService } from '../appinsureserve.service';
import { LoginService } from '../login.service';
import {AppInsurance } from '../app-insurance';

@Component({
  selector: 'app-apply-insurance',
  templateUrl: './apply-insurance.component.html',
  styleUrls: ['./apply-insurance.component.css']
})
export class ApplyInsuranceComponent implements OnInit {
  appins: AppInsurance;

  constructor(private cervice:LoginService) { 
    this.appins=new AppInsurance();
  }
  saveins(form1:any)
  {
    this.appins=form1.value;
    this.cervice.claimdata(this.appins).subscribe(
      (data)=>{
        console.log(data);
        alert("submitted");
      },
      (error)=>console.log(error)

    )

  }
  ngOnInit(): void {
   
    
  }
}
