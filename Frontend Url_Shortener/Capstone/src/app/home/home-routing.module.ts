import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PlansComponent } from './plans/plans.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:"homepage",component:HomepageComponent},
    {path:"plans",component:PlansComponent},
    {path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
