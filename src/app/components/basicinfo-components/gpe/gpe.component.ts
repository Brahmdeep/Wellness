import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-gpe',
  templateUrl: './gpe.component.html',
  styleUrls: ['./gpe.component.css']
})
export class GpeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onclicksubmit(){
    this.router.navigate(['/basic/sce']);
  }
}
