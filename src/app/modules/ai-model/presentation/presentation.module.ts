import { NgModule } from '@angular/core';
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
    SharedModule,
    MatIconModule,
  ],
})
export class PresentationModule { }
