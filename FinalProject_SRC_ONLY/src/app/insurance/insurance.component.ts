import { Component, OnInit } from '@angular/core';
import { InsureserveService } from '../insureserve.service';
import { LoginService } from '../login.service';
import {Insurance } from '../insurance';


@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  insurance: Insurance;

  constructor(private serve:LoginService) {
    this.insurance=new Insurance();
   }

 
  saveins(form1:any)
  {
    this.insurance=form1.value;
    this.serve.getdata(this.insurance).subscribe(
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
