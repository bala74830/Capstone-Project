import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { PlansComponent } from './plans/plans.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    HomepageComponent,
    PlansComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
