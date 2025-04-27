import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { BuyplanComponent } from './buyplan/buyplan.component';
import { GenerateurlComponent } from './generateurl/generateurl.component';
import { FormsModule } from '@angular/forms';
import { MyplansComponent } from './myplans/myplans.component';
import { MyurlsComponent } from './myurls/myurls.component';
import { RedirecturlComponent } from './redirecturl/redirecturl.component';
import { QueriesComponent } from './queries/queries.component';
import { RenewurlComponent } from './renewurl/renewurl.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    UserqueryComponent,
    BuyplanComponent,
    GenerateurlComponent,
    MyplansComponent,
    MyurlsComponent,
    RedirecturlComponent,
    QueriesComponent,
    RenewurlComponent,
    UserdashboardComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
