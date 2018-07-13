import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie';
import { ValidationServiceService } from '../../../services/validation-Services/validation-service.service';
import { GetdataService } from '../../../services/FetchingServices/getdata.service';
import { FlashMessagesService } from '../../../../../node_modules/angular2-flash-messages';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  //////////////
  passlog:any;
  emaillog:any;
  /////////////

  employee:any=[];

  constructor(private cookieService:CookieService,
  private validate:ValidationServiceService,
  private getData:GetdataService,
  private flashMessage:FlashMessagesService,
  private router:Router) { }

  ngOnInit() {
  }
  onClickLogin(){
     
      if(this.passlog==undefined || this.emaillog==undefined){
      this.flashMessage.show('Please fill all the "Fields"',{cssClass:'alert-danger',timeout:3000});
      return false;
      }
      if(!this.validate.validateEmail(this.emaillog)){
      this.flashMessage.show('Please fill email in proper email format',{cssClass:'alert-danger',timeout:3000});
      return false;
      }
      var url="http://localhost:3000/api/Medicalstaffs?filter=%7B%22where%22%3A%7B%22email%22%3A%20%22"+this.emaillog+"%22%7D%7D";
      this.getData.getemployee(url).then(data=>{
        this.employee=data;
        if(this.employee[0]==undefined){
           this.flashMessage.show('Email not found',{cssClass:'alert-danger',timeout:3000});
        }else{
          if(this.employee[0].password==this.passlog){
             this.flashMessage.show('successfully logged in',{cssClass:'alert-success',timeout:3000});    
             this.cookieService.removeAll();
             localStorage.setItem('emailid',this.emaillog);
             localStorage.setItem('status','true');
             localStorage.setItem('role',data[0].role);
             console.log(localStorage.getItem('status'))
              window.location.href="http://localhost:4200/hospitalreg";
          }else if(this.employee[0].password!=this.passlog){
              this.flashMessage.show('Email and password dont match',{cssClass:'alert-danger',timeout:3000});
          }
        }
        
      },err=>{
        console.log(err);
      })
     
        
      
  }
 
}
