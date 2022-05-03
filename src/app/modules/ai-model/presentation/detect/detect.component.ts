import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.sass']
})
export class DetectComponent {

  @Input('resultImage') resultImage : string | null = null;
  @Output('detect') detect = new EventEmitter<{image : File}>();

  imageFile!: File;
  imgSrc!: any;

  constructor(
    public loadingService : LoadingService,
  ) {}


  fileChangeEvent(event: any) {
    if (event.target.files && event.target.files[0]) {
        this.imageFile = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imgSrc = reader.result;

        reader.readAsDataURL(this.imageFile);
    }
  }

  onDetect(){
    this.detect.emit({image: this.imageFile });
  }

}
