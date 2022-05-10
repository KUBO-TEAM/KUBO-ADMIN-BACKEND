import { Observable } from "rxjs";
import { NotificationModel } from "../domain/notification.model";

export abstract class NotificationRepository{
  abstract createNotification(notification: NotificationModel ) : Observable<{message : string}>;
}
