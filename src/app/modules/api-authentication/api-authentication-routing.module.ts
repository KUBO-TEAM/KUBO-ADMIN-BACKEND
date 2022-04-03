import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { VerificationPageComponent } from './presentation/verification-page/verification-page.component';

const routes: Routes = [
  {path: '', component: VerificationPageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ApiAuthenticationRoutingModule { }
