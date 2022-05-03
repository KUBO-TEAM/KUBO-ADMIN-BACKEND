import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { AiModel } from '../../core/domain/ai.model';
import { DetectImageYolov4TinyUseCase } from '../../core/usecases/detect-image-yolov4-tiny.usecase';
import { DetectImageYolov4UseCase } from '../../core/usecases/detect-image-yolov4.usecase';
import { GetYolov4LatestAiModelUseCase } from '../../core/usecases/get-yolov4-latest-ai-model.usecase';
import { GetYolov4TinyLatestAiModelUseCase } from '../../core/usecases/get-yolov4-tiny-latest-ai-model.usecase';
import { UpdateYolov4ModelUseCase } from '../../core/usecases/update-yolov4-model.usecase';
import { UpdateYolov4TinyModelUseCase } from '../../core/usecases/update-yolov4-tiny-model.usecase';
import { detectImageYolov4TinySuccess } from './ai/detect-image-yolov4-tiny/detect-image-yolov4-tiny-actions';
import { detectImageYolov4Success } from './ai/detect-image-yolov4/detect-image-yolov4-actions';
import { getLatestAiModelSuccess } from './ai/get-latest-ai-model/detect-image-actions';

@Injectable({
  providedIn: 'root'
})
export class AiModelService {

  constructor(
    private detectImageYolov4UseCase: DetectImageYolov4UseCase,
    private detectImageYolov4TinyUseCase: DetectImageYolov4TinyUseCase,
    private updateYolov4ModelUseCase: UpdateYolov4ModelUseCase,
    private updateYolov4TinyModelUseCase: UpdateYolov4TinyModelUseCase,
    private getYolov4LatestAiModelUseCase: GetYolov4LatestAiModelUseCase,
    private getYolov4TinyLatestAiModelUseCase: GetYolov4TinyLatestAiModelUseCase,
    private loadingService : LoadingService,
    private _snackBarService : SnackbarService,
    private store : Store<{}>
  ) { }

  detectImageYolov4(imageFile : File){

    const formData = new FormData();

    formData.append('image', imageFile);

    this.loadingService.toggleLoadingStatus();

    this.detectImageYolov4UseCase.execute({form : formData}).subscribe((param: {message: string, data : {ingredients: Array<string>, imageUrl: string} })=>{
      this.loadingService.toggleLoadingStatus();
      this._snackBarService.openDuratedSnackBar(param.message);
      this.store.dispatch(detectImageYolov4Success({imageUrl: param.data.imageUrl}));
    });
  }

  detectImageYolov4Tiny(imageFile : File){

    const formData = new FormData();

    formData.append('image', imageFile);

    this.loadingService.toggleLoadingStatus();

    this.detectImageYolov4TinyUseCase.execute({form : formData}).subscribe((param: {message: string, data : {ingredients: Array<string>, imageUrl: string} })=>{
      this.loadingService.toggleLoadingStatus();
      this._snackBarService.openDuratedSnackBar(param.message);
      this.store.dispatch(detectImageYolov4TinySuccess({imageUrl: param.data.imageUrl}));
    });
  }

  updateYolov4Model(modelFile : File){
    this.loadingService.toggleLoadingStatus();

    this.updateYolov4ModelUseCase.execute({file: modelFile}).subscribe((param: {message: string})=>{
      this.loadingService.toggleLoadingStatus();
      this._snackBarService.openDuratedSnackBar(param.message);
      this.fetchYolov4LatestAiModel();
    });

  }

  updateYolov4TinyModel(modelFile : File){
    this.loadingService.toggleLoadingStatus();

    this.updateYolov4TinyModelUseCase.execute({file: modelFile}).subscribe((param: {message: string})=>{
      this.loadingService.toggleLoadingStatus();
      this._snackBarService.openDuratedSnackBar(param.message);
      this.fetchYolov4LatestAiModel();
    });

  }

  fetchYolov4LatestAiModel(){
    this.getYolov4LatestAiModelUseCase.execute().subscribe((param: {message: string, data : AiModel })=>{
      this.store.dispatch(getLatestAiModelSuccess({aiModel: param.data}));
    });
  }

  fetchYolov4TinyLatestAiModel(){
    this.getYolov4TinyLatestAiModelUseCase.execute().subscribe((param: {message: string, data : AiModel })=>{
      this.store.dispatch(getLatestAiModelSuccess({aiModel: param.data}));
    });
  }

}
