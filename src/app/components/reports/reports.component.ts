import { Component, OnInit } from '@angular/core';
import { Route, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('status')=='false'){
      alert('login first !');
      this.router.navigate(['/']);
    }
  }

}
