import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { ApiAuthenticationRoutingModule } from '../api-authentication-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgrxModule } from './ngrx/ngrx.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    VerificationPageComponent,
  ],
  imports: [
    CommonModule,
    ApiAuthenticationRoutingModule,
    SharedModule,
    MatCheckboxModule,
    NgrxModule,
    ReactiveFormsModule,
    MatInputModule
  ],
})
export class PresentationModule { }
