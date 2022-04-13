import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { cropImageSuccess } from '../ngrx/crop_image/crop_image.reducer';
import { Location } from '@angular/common';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.sass']
})
export class CropImageComponent {

  imageChangedEvent$ : Observable<Event>;
  croppedImage: string | null | undefined;

  constructor(
    private location : Location,
    private snackBarServices : SnackbarService,
    private readonly store: Store<{
      cropImageReducer: Event,
    }>,
  ) {
    this.imageChangedEvent$ = this.store.select('cropImageReducer');
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  sendCroppedImage(){
    if(this.croppedImage){
      this.store.dispatch(cropImageSuccess({imagePath: this.croppedImage}));
      this.location.back();
    }else{
      this.snackBarServices.openDuratedSnackBar('Missing cropped Image');
    }

  }

  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }

}
