import { UserInformationComponent } from './Components/user-information/user-information.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInformationDetailComponent } from './Components/user-information/user-information-detail/user-information-detail.component';

const routes: Routes = [{
  path:'',
  component:UserInformationComponent,
  data:{
    title:"Home"
  },
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
