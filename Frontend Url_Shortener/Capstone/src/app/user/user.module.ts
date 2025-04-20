import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { BuyplanComponent } from './buyplan/buyplan.component';
import { GenerateurlComponent } from './generateurl/generateurl.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    UserqueryComponent,
    BuyplanComponent,
    GenerateurlComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
