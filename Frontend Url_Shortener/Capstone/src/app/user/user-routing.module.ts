import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { BuyplanComponent } from './buyplan/buyplan.component';
import { GenerateurlComponent } from './generateurl/generateurl.component';
import { MyplansComponent } from './myplans/myplans.component';
import { MyurlsComponent } from './myurls/myurls.component';
import { RedirecturlComponent } from './redirecturl/redirecturl.component';
import { QueriesComponent } from './queries/queries.component';
import { RenewurlComponent } from './renewurl/renewurl.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"userlogin",component:LoginComponent},
  {path:"userreg",component:RegistrationComponent},
  {path:"userquery",component:UserqueryComponent},
  {path:"userbuyplan",component:BuyplanComponent},
  {path:"generateurl",component:GenerateurlComponent},
  {path:"showmyplans",component:MyplansComponent},
  {path:"myurls",component:MyurlsComponent},
  {path:"redirecturl",component:RedirecturlComponent},
  {path:"queries",component:QueriesComponent},
  {path:"renewurl",component:RenewurlComponent},
  {path:"dashboard",component:UserdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
