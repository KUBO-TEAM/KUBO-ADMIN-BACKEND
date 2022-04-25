import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { AiModelService } from '../ngrx/ai-model.service';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.sass']
})
export class DetectComponent implements OnInit {

  imgSrc!: any;
  imageFile!: File;

  resultImage$ : Observable<string>;



  constructor(
    private aiModelService: AiModelService,
    private store: Store<{detectImageReducer: string}>,
    public loadingService : LoadingService,
  ) {
    this.resultImage$ = this.store.select('detectImageReducer');
  }

  ngOnInit(): void {
  }


  fileChangeEvent(event: any) {
    if (event.target.files && event.target.files[0]) {
        this.imageFile = event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imgSrc = reader.result;

        reader.readAsDataURL(this.imageFile);
    }
  }

  detect(){

    if(this.imageFile)
      this.aiModelService.detectImage(this.imageFile);
  }

}
