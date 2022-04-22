import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { DetectImageUseCase } from '../../core/usecases/detect-image.usecase';
import { detectImageSuccess } from './ai/detect-image/detect-image-actions';

@Injectable({
  providedIn: 'root'
})
export class AiModelService {

  constructor(
    private detectImageUseCase: DetectImageUseCase,
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


}
