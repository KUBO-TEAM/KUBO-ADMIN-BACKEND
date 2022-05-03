import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { AiModelComponent } from './ai-model/ai-model.component';
import { DetectComponent } from './detect/detect.component';
import { UpdateModelComponent } from './update-model/update-model.component';
import {MatTabsModule} from '@angular/material/tabs';
import { Yolov4Component } from './yolov4/yolov4.component';
import { Yolov4TinyComponent } from './yolov4-tiny/yolov4-tiny.component';

@NgModule({
  declarations: [
    AiModelComponent,
    DetectComponent,
    UpdateModelComponent,
    Yolov4Component,
    Yolov4TinyComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,MatTabsModule
  ],
})
export class PresentationModule { }
