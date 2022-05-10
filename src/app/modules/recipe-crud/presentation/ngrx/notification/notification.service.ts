import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { NotificationModel } from '../../../core/domain/notification.model';
import { CreateNotificationUseCase } from '../../../core/usecases/create-notification.usecase';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private createNotificationUseCase : CreateNotificationUseCase,
    private _snackBarServices : SnackbarService,
    private loadingService : LoadingService,
  ) {

  }

  createNotification(form : FormGroup){

    const {
      title,
      message,
    } = form.controls;

    if(title.value && message.value){

      this.loadingService.toggleLoadingStatus();

      this.createNotificationUseCase.execute({
        title: title.value,
        message: message.value,
      }).subscribe(
        (response: {message: string}) => {

        this.loadingService.toggleLoadingStatus();
        this._snackBarServices.openDuratedSnackBar(response.message);
        }
      )
    }
  }
}
