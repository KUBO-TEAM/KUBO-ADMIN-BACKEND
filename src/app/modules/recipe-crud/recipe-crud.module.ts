import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationModule } from './presentation/presentation.module';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { RecipeCrudRoutingModule } from './recipe-crud-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PresentationModule,
    RecipeCrudRoutingModule,
    DataModule,
    CoreModule
  ]
})
export class RecipeCrudModule { }
