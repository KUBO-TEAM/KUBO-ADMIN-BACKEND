import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationPageComponent } from './components/verification-page/verification-page.component';

const routes: Routes = [
  {path: '', component: VerificationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApiAuthenticationRoutingModule { }
