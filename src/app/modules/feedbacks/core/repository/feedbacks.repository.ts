import { Observable } from "rxjs";
import { FeedbacksModel } from "../domain/feedbacks.model";

export abstract class FeedbacksRepository{
  abstract getAllFeedbacks() : Observable<{message: string, data:  Array<FeedbacksModel>}>;
}
