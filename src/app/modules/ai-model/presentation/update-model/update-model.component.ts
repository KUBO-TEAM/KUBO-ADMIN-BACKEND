import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { AiModel } from '../../core/domain/ai.model';
import { AiModelService } from '../ngrx/ai-model.service';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrls: ['./update-model.component.sass']
})
export class UpdateModelComponent implements OnInit {

  latestAiModel$ : Observable<AiModel>;

  constructor(
    private aiModelService: AiModelService,
    public loadingService: LoadingService,
    private store : Store<{getLatestAiModelReducer: AiModel}>,
  ) {
    this.latestAiModel$ = this.store.select('getLatestAiModelReducer');
  }

  ngOnInit(): void {
    this.aiModelService.fetchLatestAiModel();
  }

  fileChangeEvent(event: any) {
    if (event.target.files && event.target.files[0]) {
        console.log('Update Model Component'+ event.target.files[0]);
        this.aiModelService.updateModel(event.target.files[0]);
    }
  }

}
