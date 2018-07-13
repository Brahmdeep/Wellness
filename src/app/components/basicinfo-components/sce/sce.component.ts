import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-sce',
  templateUrl: './sce.component.html',
  styleUrls: ['./sce.component.css']
})
export class SceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('status')=='false'){
      alert('login first !');
      this.router.navigate(['/']);
    }else if(localStorage.getItem('status')=='true' && localStorage.getItem('role')=='Nurse'){
     alert('You have insufficient rights to access this content');
     this.router.navigate(['/']);
    }
  }
  onclicksubmit(){
    this.router.navigate(['/basic/ivest']);
  }

}
