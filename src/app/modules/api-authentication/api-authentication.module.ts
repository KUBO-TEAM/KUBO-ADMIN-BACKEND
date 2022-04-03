import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationModule } from './presentation/presentation.module';
import { CoreModule } from './core/core.module';
import { DataModule } from './data/data.module';
@NgModule({
  imports: [
    CommonModule,
    PresentationModule,
    CoreModule,
    DataModule,
  ]
})
export class ApiAuthenticationModule { }
