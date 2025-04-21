import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PlansComponent } from './plans/plans.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomepageComponent,
    PlansComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
