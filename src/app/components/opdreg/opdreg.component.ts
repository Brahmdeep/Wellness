import { Component, OnInit } from '@angular/core';
import { ZonesService } from '../../services/FetchingServices/zones.service';
import { Router } from '../../../../node_modules/@angular/router';
@Component({
  selector: 'app-opdreg',
  templateUrl: './opdreg.component.html',
  styleUrls: ['./opdreg.component.css']
})
export class OpdregComponent implements OnInit {
//Properties
zone:any;
zones:any=[];
categoryopt:any[];
divisions:any=[];
forCompare:any;
availabledivisions:any=[];


constructor(private zoneService:ZonesService,
private router:Router) { }
category:any;
ngOnInit() {
  if(localStorage.getItem('status')=='false'){
    alert('login first !');
    this.router.navigate(['/']);
 }
  var url="http://localhost:3000/api/ZoneMsts";
  this.zoneService.getAllZones().then(zones=>{
    this.zones=zones;
  })
  this.zoneService.getAllDivisions().then(divisions=>{
    this.divisions=divisions;
  })
  this.categoryopt=[
    {opt:"NR"},
    {opt:"REIHS"},
    {opt:"RF"},
    {opt:"TEMP"},
    {opt:"OS"},

  ]
}
makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  alert(text);
}
onChange(deviceValue) {
  this.category=deviceValue;
}
onChangezone(deviceValue) {
  this.availabledivisions=[];
  this.zone=deviceValue;
  this.forCompare=this.zone.substring(0,2);
  this.zoneService.getAvailableDivisions(this.zone.substring(0,2)).then(availabledivision=>{
    console.log(availabledivision);
    this.availabledivisions=availabledivision;
    console.log(this.availabledivisions);
  })
 }

}
