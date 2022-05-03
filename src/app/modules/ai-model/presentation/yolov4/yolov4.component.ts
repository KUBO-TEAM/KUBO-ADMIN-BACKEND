import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { AiModel } from '../../core/domain/ai.model';
import { AiModelService } from '../ngrx/ai-model.service';

@Component({
  selector: 'app-yolov4',
  templateUrl: './yolov4.component.html',
  styleUrls: ['./yolov4.component.sass']
})
export class Yolov4Component implements OnInit {

  latestAiModel$ : Observable<AiModel>;

  resultImage$ : Observable<string>;

  constructor(
    private aiModelService: AiModelService,
    private store : Store<{getLatestAiModelReducer: AiModel, detectImageYolov4Reducer: string}>,
  ) {
    this.latestAiModel$ = this.store.select('getLatestAiModelReducer');
    this.resultImage$ = this.store.select('detectImageYolov4Reducer');
  }

  ngOnInit(): void {
    this.aiModelService.fetchYolov4LatestAiModel();
  }

  updateModel(event: any) {
    this.aiModelService.updateYolov4Model(event.file);
  }

  detect(event: any){
      this.aiModelService.detectImageYolov4(event.image);
  }
}
