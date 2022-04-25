import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { AiModel } from '../../core/domain/ai.model';
import { DetectImageUseCase } from '../../core/usecases/detect-image.usecase';
import { GetLatestAiModelUseCase } from '../../core/usecases/get-latest-ai-model.usecase';
import { UpdateModelUseCase } from '../../core/usecases/update-model.usecase';
import { detectImageSuccess } from './ai/detect-image/detect-image-actions';
import { getLatestAiModelSuccess } from './ai/get-latest-ai-model/detect-image-actions';

@Injectable({
  providedIn: 'root'
})
export class AiModelService {

  constructor(
    private detectImageUseCase: DetectImageUseCase,
    private updateModelUseCase: UpdateModelUseCase,
    private getLatestAiModelUseCase: GetLatestAiModelUseCase,
    private loadingService : LoadingService,
    private _snackBarService : SnackbarService,
    private store : Store<{}>
  ) { }

  detectImage(imageFile : File){

    const formData = new FormData();

    formData.append('image', imageFile);

    this.loadingService.toggleLoadingStatus();

    this.detectImageUseCase.execute({form : formData}).subscribe((param: {message: string, imageUrl: string})=>{
      this.loadingService.toggleLoadingStatus();
      this._snackBarService.openDuratedSnackBar(param.message);
      this.store.dispatch(detectImageSuccess({imageUrl: param.imageUrl}));
    });
  }

  updateModel(modelFile : File){
    this.loadingService.toggleLoadingStatus();

    this.updateModelUseCase.execute({file: modelFile}).subscribe((param: {message: string})=>{
      this.loadingService.toggleLoadingStatus();
      this._snackBarService.openDuratedSnackBar(param.message);
      this.fetchLatestAiModel();
    });

  }

  fetchLatestAiModel(){
    this.getLatestAiModelUseCase.execute().subscribe((param: {message: string, data : AiModel })=>{
      this.store.dispatch(getLatestAiModelSuccess({aiModel: param.data}));
    });
  }


}
