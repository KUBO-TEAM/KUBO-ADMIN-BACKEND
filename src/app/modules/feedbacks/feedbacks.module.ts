import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackListPageComponent } from './presentation/feedback-list-page/feedback-list-page.component';
import { FeedbacksRoutingModule } from './feedbacks-routing.module';
import { PresentationModule } from './presentation/presentation.module';
import { DataModule } from './data/data.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FeedbacksRoutingModule,
    PresentationModule,
    DataModule,
  ]
})
export class FeedbacksModule { }
