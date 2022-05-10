import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiAuthenticationService } from "src/app/modules/api-authentication/presentation/api-authentication.service";
import { environment } from "src/environments/environment";
import { NotificationModel } from "../../../core/domain/notification.model";
import { NotificationRepository } from "../../../core/repositories/notification.repository";

@Injectable({
  providedIn: 'root'
})
export class NotificationRepositoryImpl extends NotificationRepository {


  constructor(
    private http: HttpClient,
    private authService: ApiAuthenticationService,
  ){
    super();
  }

  createNotification(notification: NotificationModel): Observable<{ message: string; }> {
    return this.http.post<{message : string}>(environment.url + 'api/notification/', notification,
      {
        headers : { Authorization : `Bearer ${this.authService.userToken()}`},
      }
    );
  }

}
