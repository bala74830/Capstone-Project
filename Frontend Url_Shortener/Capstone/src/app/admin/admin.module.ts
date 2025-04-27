import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateplanComponent } from './createplan/createplan.component';
import { ViewplanComponent } from './viewplan/viewplan.component';
import { UpdateplanComponent } from './updateplan/updateplan.component';
import { GetallusersComponent } from './getallusers/getallusers.component';
import { FormsModule } from '@angular/forms';
import { BlacklistusersComponent } from './blacklistusers/blacklistusers.component';
import { ViewqueiresComponent } from './viewqueires/viewqueires.component';
import { AllurlsComponent } from './allurls/allurls.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    CreateplanComponent,
    ViewplanComponent,
    UpdateplanComponent,
    GetallusersComponent,
    BlacklistusersComponent,
    ViewqueiresComponent,
    AllurlsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
