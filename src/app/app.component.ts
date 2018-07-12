import { Component } from '@angular/core';
import { CookieService } from '../../node_modules/angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email:string;
  constructor(
  private cookieService:CookieService) { }
  ngOnInit() {
    
    if(localStorage.getItem('status')=='true'){
      this.email="Welcome "+localStorage.getItem('emailid');
    }else{
      this.email="Welcome Guest User";
    }
  }
  onclickLogout(){
    if(localStorage.getItem('status')=='false'){
      return;
    }
    localStorage.setItem('status','false');
    localStorage.setItem('emailid','');
    window.location.href="http://localhost:4200";
  }
  

}
