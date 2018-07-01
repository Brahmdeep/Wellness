import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router,RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { HospitalRegComponent } from './components/hospital-reg/hospital-reg.component';
import { MedicalStafRegComponent } from './components/medical-staf-reg/medical-staf-reg.component';
import { OpdregComponent } from './components/opdreg/opdreg.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { ReportsComponent } from './components/reports/reports.component';
import { BasicinfoComponent } from './components/basicinfo-components/basicinfo/basicinfo.component';
import { FinalComponent } from './components/basicinfo-components/final/final.component';
import { GpeComponent } from './components/basicinfo-components/gpe/gpe.component';
import { IvestComponent } from './components/basicinfo-components/ivest/ivest.component';
import { SceComponent } from './components/basicinfo-components/sce/sce.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalRegComponent,
    MedicalStafRegComponent,
    OpdregComponent,
    PasswordChangeComponent,
    ReportsComponent,
    BasicinfoComponent,
    FinalComponent,
    GpeComponent,
    IvestComponent,
    SceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'hospitalreg',component:HospitalRegComponent},
      {path:'medicalstaffreg',component:MedicalStafRegComponent},
      {path:'opdreg',component:OpdregComponent},
      {path:'reports',component:ReportsComponent},
      {path:'password',component:PasswordChangeComponent},
      {path:'basic/basicinfo',component:BasicinfoComponent},
      {path:'basic/final',component:FinalComponent},
      {path:'basic/gpe',component:GpeComponent},
      {path:'basic/ivest',component:IvestComponent},
      {path:'basic/sce',component:SceComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
