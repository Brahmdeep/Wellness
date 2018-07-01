import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css']
})
export class BasicinfoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onclicksubmit(){
    this.router.navigate(['/basic/gpe']);
  }

}
