import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { AiModelComponent } from './ai-model/ai-model.component';
import { DetectComponent } from './detect/detect.component';
import { UpdateModelComponent } from './update-model/update-model.component';

@NgModule({
  declarations: [
    AiModelComponent,
    DetectComponent,
    UpdateModelComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export class PresentationModule { }
