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
  }
  onclicksubmit(){
    this.router.navigate(['/basic/ivest']);
  }

}
