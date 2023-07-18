import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateaccountComponent } from './createaccount/createaccount.component';

const routes: Routes = [
  {path:"login",component:CreateaccountComponent},
   { path: '', component: CreateaccountComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
