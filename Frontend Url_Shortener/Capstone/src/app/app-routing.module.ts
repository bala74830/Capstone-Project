import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomepageComponent } from './home/homepage/homepage.component';

const routes: Routes = [
  {path:"user",loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
   {path: '',redirectTo: 'home',pathMatch: 'full' },
  {path:"home",loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  //{path:"",component:HomepageComponent},
  // {path:'admin', component:AdminComponent, canActivate: [AuthGuardService],data: { role: 'admin' }},
  // {path:'bank',component:BankadminComponent, canActivate: [AuthGuardService],data: { role: 'bank' }},
  // {path:'company',component:CompanyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
