import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { response } from "express";
import {  map, mergeMap, Observable } from "rxjs";
import { ApiAuthenticationService } from "src/app/modules/api-authentication/presentation/api-authentication.service";
import { environment } from "src/environments/environment";
import { FeedbacksModel } from "../../core/domain/feedbacks.model";
import { FeedbacksRepository } from "../../core/repository/feedbacks.repository";
import { FeedbacksEntity } from "./feedbacks-entity";

@Injectable({
  providedIn: 'root'
})
export class FeedbacksRepositoryImpl extends FeedbacksRepository {
  constructor(
    private http: HttpClient,
    private authService: ApiAuthenticationService,
  ){
    super();
  }


  getAllFeedbacks(): Observable<{ message: string; data: FeedbacksModel[]; }> {
    return this.http.get<{message: string, data: Array<FeedbacksEntity>}>(environment.url + 'api/feedbacks/',
      {
        headers : { Authorization : `Bearer ${this.authService.userToken()}`},
      }
    );
  }


}
