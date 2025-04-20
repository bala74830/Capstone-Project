import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateplanComponent } from './createplan/createplan.component';
import { UpdateplanComponent } from './updateplan/updateplan.component';
import { ViewplanComponent } from './viewplan/viewplan.component';

const routes: Routes = [
  {path:"admincp",component:CreateplanComponent},
  {path:"adminup",component:UpdateplanComponent},
  {path:"adminvp",component:ViewplanComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
