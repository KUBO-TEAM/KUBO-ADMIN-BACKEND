import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { cropImageSuccess } from '../ngrx/crop_image/crop_image.reducer';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.sass']
})
export class CropImageComponent implements OnInit {

  imageChangedEvent$ : Observable<Event>;
  croppedImage: any = '';

  constructor(
    private location : Location,
    private readonly store: Store<{
      cropImageReducer: Event,
    }>,
  ) {
    this.imageChangedEvent$ = this.store.select('cropImageReducer');
  }

  ngOnInit(): void {
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;

  }

  sendCroppedImage(){

    this.store.dispatch(cropImageSuccess({imagePath: this.croppedImage}));
    this.location.back();
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
