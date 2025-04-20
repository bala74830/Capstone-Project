import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserqueryComponent } from './userquery/userquery.component';

const routes: Routes = [
  {path:"userlogin",component:LoginComponent},
  {path:"userreg",component:RegistrationComponent},
  {path:"userquery",component:UserqueryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
