import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../node_modules/@angular/router';
import { GetdataService } from '../../services/FetchingServices/getdata.service';
import { FlashMessagesService } from '../../../../node_modules/angular2-flash-messages';
import { SendDataService } from '../../services/PostingServices/send-data.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  ///////////////////////
  oldpass:any;
  newpass:any;
  confirmpass:any;
  //////////////////////


  staff:any;
  constructor(private router:Router,
  private getdata:GetdataService,
  private flash:FlashMessagesService,
  private sendData:SendDataService) { }

  ngOnInit() {
    if(localStorage.getItem('status')=='false'){
      alert('login first !');
      this.router.navigate(['/']);
     }
  }
  onclicksubmit(){
    var url="http://localhost:3000/api/Medicalstaffs?filter=%7B%22where%22%3A%7B%22email%22%3A%20%22"+localStorage.getItem('emailid')+"%22%7D%7D";
    this.getdata.getAllData(url).then(data=>{
      this.staff=data[0];
      console.log(this.staff);
      if(this.staff.password==this.oldpass){
        if(this.oldpass==undefined || this.newpass==undefined || this.confirmpass==undefined){
          this.flash.show('Fill all the fields',{cssClass:'alert-danger',timeout:3000}); 
          return;        
        }
        if(this.newpass==this.confirmpass){
            this.staff.password=this.newpass;
            url="http://localhost:3000/api/Medicalstaffs";
            this.sendData.modifyData(url,this.staff).then(data=>{
            console.log(data);
          },err=>{
            console.log(err);
          })
          this.flash.show('password changed successfully!',{cssClass:'alert-success',timeout:3000}); 
        }else{
          this.flash.show('Confirm password does not match',{cssClass:'alert-danger',timeout:3000}); 
        }
      }else{
      this.flash.show('Entered wrong old password!',{cssClass:'alert-danger',timeout:3000}); 
      }
      localStorage.setItem('status','false');
      localStorage.setItem('emailid','');
      localStorage.setItem('role','');
      window.location.href="http://localhost:4200/";
    },err=>{
      console.log(err);
    })
    

  }

}
