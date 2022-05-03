import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AiModel } from '../../core/domain/ai.model';
import { AiModelService } from '../ngrx/ai-model.service';

@Component({
  selector: 'app-yolov4-tiny',
  templateUrl: './yolov4-tiny.component.html',
  styleUrls: ['./yolov4-tiny.component.sass']
})
export class Yolov4TinyComponent implements OnInit {

  latestAiModel$ : Observable<AiModel>;

  resultImage$ : Observable<string>;

  constructor(
    private aiModelService: AiModelService,
    private store : Store<{getLatestAiModelReducer: AiModel, detectImageYolov4TinyReducer: string}>,
  ) {
    this.latestAiModel$ = this.store.select('getLatestAiModelReducer');
    this.resultImage$ = this.store.select('detectImageYolov4TinyReducer');
  }

  ngOnInit(): void {
    this.aiModelService.fetchYolov4TinyLatestAiModel();
  }

  updateModel(event: any) {
    this.aiModelService.updateYolov4TinyModel(event.file);
  }

  detect(event: any){
      this.aiModelService.detectImageYolov4Tiny(event.image);
  }
}
