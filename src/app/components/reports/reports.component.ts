import { Component, OnInit } from '@angular/core';
import { Route, Router } from '../../../../node_modules/@angular/router';
import { GetdataService } from '../../services/FetchingServices/getdata.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  /////////////////////
  fromdate:any;
  todate:any;
  ////////////////////
  availbleemployee:any=[];
  employees:any=[];
  ctr:any;
  constructor(private router:Router,
  private getData:GetdataService) { }

  ngOnInit() {
    if(localStorage.getItem('status')=='false'){
      alert('login first !');
      this.router.navigate(['/']);
    }
  }
  onsubmit(){
  //   let employee={
  //     "controllingauthority": this.controllingauthority,
  //     "dataofbirth": this.DOB,
  //     "datenow": new Date().getTime(),
  //     "department": this.department,
  //     "designation": this.designation,
  //     "division": "KATIHAR DIVISION",
  //     "eid": "E"+Date.now(),
  //     "employeeservicestation": this.servingstation,
  //     "examinedat": "Railway Hospital",
  //     "examinedby": this.examinedby,
  //     "examineddate": this.examinationdate,
  //     "firstname": this.firstname,
  //     "lastname": this.lastname,
  //     "medicalcard":this.medicalicard ,
  //     "medicalpass": this.medicalpass,
  //     "middlename": this.middlename,
  //     "registrationno": this.registrationno,
  //     "station": "NJP",
  //     "zone": "NORTH FRONTIER RAILWAY"
  // }
    var fdate=new Date(this.fromdate);
    var tdate=new Date(this.todate);
    var url="http://localhost:3000/api/Employeebasicinfos";
    console.log(fdate);
    console.log(tdate);
  
    this.getData.getAllData(url).then(data=>{
      this.employees=data;
     this.ctr=0;
      for(var i=0;i<this.employees.length;i++){
        var date=this.employees[i].datenow;
        var intdate=parseInt(date);
        console.log(new Date(intdate));
        if(fdate<new Date(intdate) && new Date(intdate)<tdate){
          this.ctr++;
          this.availbleemployee.push(this.employees[i]);
        }
      }
      console.log(this.availbleemployee);
    },err=>{
      console.log(err);
    })
   
  }

}
