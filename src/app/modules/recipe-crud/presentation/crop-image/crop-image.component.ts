import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { Observable } from 'rxjs';
import { cropImageSuccess } from '../../states/crop_image_state/crop_image.reducer';

@Component({
  selector: 'app-crop-image',
  templateUrl: './crop-image.component.html',
  styleUrls: ['./crop-image.component.sass']
})
export class CropImageComponent implements OnInit {

  imageChangedEvent$ : Observable<Event>;
  croppedImage: any = '';

  constructor(
    private readonly router: Router,
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
    this.router.navigate(['/overview/add']);
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
