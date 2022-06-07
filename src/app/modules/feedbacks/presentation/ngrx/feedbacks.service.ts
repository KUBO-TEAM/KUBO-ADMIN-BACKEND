import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { base64ToFile } from 'ngx-image-cropper';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { FeedbacksModel } from '../../core/domain/feedbacks.model';
import { GetAllFeedbacksUsecase } from '../../core/usecases/get-all-feedbacks.usecase';
import { feedbacksFetchSuccess } from './get-all-feedbacks/get-all-feedbacks-actions';
@Injectable({
  providedIn: 'root'
})
export class FeedbacksService {

  constructor(
    private getALlFeedbacksUsecase: GetAllFeedbacksUsecase,
    private store: Store<{}>,
    private route: Router,
    private _snackBarServices : SnackbarService,
    private loadingService : LoadingService,
    ) {

    }

  getAllFeedbacks(){
    this.getALlFeedbacksUsecase.execute().subscribe((value: {message: string, data: Array<FeedbacksModel>})=>{
      this.store.dispatch(feedbacksFetchSuccess({feedbacks: value.data}));
    });
  }

}
