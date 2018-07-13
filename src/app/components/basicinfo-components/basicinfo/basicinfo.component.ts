import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {
  today:any;
  DOB:any;
  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('status')=='false'){
      alert('login first !');
      this.router.navigate(['/']);
   }else if(localStorage.getItem('status')=='true' && localStorage.getItem('role')=='Nurse'){
    alert('You have insufficient rights to access this content');
    this.router.navigate(['/']);
    }
    this.today=Date.now();
  }
  onclicksubmit(){
    this.today=Date.now();
    var seconds=new Date().getTime();
    console.log(""+this.today+" "+seconds )
    console.log(this.DOB.getTime());
    // this.router.navigate(['/basic/gpe']);
  }

}
