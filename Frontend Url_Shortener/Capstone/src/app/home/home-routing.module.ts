import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PlansComponent } from './plans/plans.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"homepage",component:HomepageComponent},
    {path:"plans",component:PlansComponent},
    {path:"about",component:AboutComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent}
    //{ path: '', redirectTo: '/home', pathMatch: 'full' } // Redirect to home by default
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
