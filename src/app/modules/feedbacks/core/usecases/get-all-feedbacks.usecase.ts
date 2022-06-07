import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { FeedbacksModel } from "../domain/feedbacks.model";
import { FeedbacksRepository } from "../repository/feedbacks.repository";


@Injectable({
  providedIn: 'root'
})
export class GetAllFeedbacksUsecase implements UseCase<void, {message: string, data:  Array<FeedbacksModel>}>{

  constructor(
    private feedbacksRepository: FeedbacksRepository
  ){}

  execute(params: void): Observable<{message: string, data:  Array<FeedbacksModel>}> {
    return this.feedbacksRepository.getAllFeedbacks();
  }

}
