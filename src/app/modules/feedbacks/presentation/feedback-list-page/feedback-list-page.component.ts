import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FeedbacksModel } from '../../core/domain/feedbacks.model';
import { FeedbacksService } from '../ngrx/feedbacks.service';

@Component({
  selector: 'app-feedback-list-page',
  templateUrl: './feedback-list-page.component.html',
  styleUrls: ['./feedback-list-page.component.sass']
})
export class FeedbackListPageComponent implements OnInit {

  feedbacks$: Observable<Array<FeedbacksModel>>;

  constructor(
    public dialog: MatDialog,
    public feedbacksService: FeedbacksService,
    private store: Store<{ getAllFeedbacksReducer: Array<FeedbacksModel>}>,
  ) {
    this.feedbacks$ = this.store.select('getAllFeedbacksReducer');
  }

  ngOnInit(): void {
    this.feedbacksService.getAllFeedbacks();
  }

}
