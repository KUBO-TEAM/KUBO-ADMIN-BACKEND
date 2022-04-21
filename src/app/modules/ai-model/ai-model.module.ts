import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiModelComponent } from './presentation/ai-model/ai-model.component';
import { AIModelRoutingModule } from './ai-model-routing.module';
import { PresentationModule } from './presentation/presentation.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AIModelRoutingModule,
    PresentationModule,
  ]
})
export class AiModelModule { }
