import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { AiModelComponent } from './ai-model/ai-model.component';
import { DetectComponent } from './detect/detect.component';

@NgModule({
  declarations: [
    AiModelComponent,
    DetectComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class PresentationModule { }
