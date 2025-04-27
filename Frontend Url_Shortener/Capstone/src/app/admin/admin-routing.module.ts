import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateplanComponent } from './createplan/createplan.component';
import { UpdateplanComponent } from './updateplan/updateplan.component';
import { ViewplanComponent } from './viewplan/viewplan.component';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { BlacklistusersComponent } from './blacklistusers/blacklistusers.component';
import { ViewqueiresComponent } from './viewqueires/viewqueires.component';
import { AllurlsComponent } from './allurls/allurls.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"admincp",component:CreateplanComponent},
  {path:"adminup",component:UpdateplanComponent},
  {path:"adminvp",component:ViewplanComponent},
  {path:"getallusers",component:GetallusersComponent},
  {path:"blacklistusers",component:BlacklistusersComponent},
  {path:"viewallqueries",component:ViewqueiresComponent},
  {path:"viewallurls",component:AllurlsComponent},
  {path:"dashboard",component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
