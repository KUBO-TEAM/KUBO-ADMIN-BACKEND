import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { NotificationModel } from "../domain/notification.model";
import { NotificationRepository } from "../repositories/notification.repository";

@Injectable({
  providedIn: 'root'
})
export class CreateNotificationUseCase implements UseCase<NotificationModel, {message: string}>{

  constructor(
    private notificationRepository: NotificationRepository,
  ){}

  execute(params: NotificationModel): Observable<{message: string}> {
    return this.notificationRepository.createNotification(params);
  }

}
