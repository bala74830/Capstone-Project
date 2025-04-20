import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserqueryComponent } from './userquery/userquery.component';
import { BuyplanComponent } from './buyplan/buyplan.component';
import { GenerateurlComponent } from './generateurl/generateurl.component';

const routes: Routes = [
  {path:"userlogin",component:LoginComponent},
  {path:"userreg",component:RegistrationComponent},
  {path:"userquery",component:UserqueryComponent},
  {path:"userbuyplan",component:BuyplanComponent},
  {path:"generateurl",component:GenerateurlComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
