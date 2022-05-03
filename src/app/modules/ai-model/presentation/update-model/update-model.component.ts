import { Component, Output, EventEmitter, Input } from '@angular/core';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { AiModel } from '../../core/domain/ai.model';

@Component({
  selector: 'app-update-model',
  templateUrl: './update-model.component.html',
  styleUrls: ['./update-model.component.sass']
})
export class UpdateModelComponent {
  @Input('latestAiModel') latestAiModel: AiModel | null = null;
  @Output("fileChangeEvent") modelChange = new EventEmitter<{file : File}>();

  fileChangeEvent(event: any) {
    if (event.target.files && event.target.files[0]) {
        this.modelChange.emit({file: event.target.files[0]});
    }
  }

  constructor(
    public loadingService: LoadingService
  ){}

}
