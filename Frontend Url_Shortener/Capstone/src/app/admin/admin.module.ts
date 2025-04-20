import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateplanComponent } from './createplan/createplan.component';
import { ViewplanComponent } from './viewplan/viewplan.component';
import { UpdateplanComponent } from './updateplan/updateplan.component';


@NgModule({
  declarations: [
    CreateplanComponent,
    ViewplanComponent,
    UpdateplanComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
