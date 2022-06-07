import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FeedbackListPageComponent } from './feedback-list-page/feedback-list-page.component';
import { MatTableModule } from '@angular/material/table';
import { FeedbacksTableComponent } from './feedbacks-table/feedbacks-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FeedbackListPageComponent,
    FeedbacksTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule,
  ],
})
export class PresentationModule { }
