import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationPageComponent } from './components/verification-page/verification-page.component';
import { ApiAuthenticationRoutingModule } from './api-authentication-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VerificationPageComponent
  ],
  imports: [
    CommonModule,
    ApiAuthenticationRoutingModule,
    SharedModule,
  ]
})
export class ApiAuthenticationModule { }
