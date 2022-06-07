import { createAction, props } from "@ngrx/store";
import { FeedbacksModel } from "../../../core/domain/feedbacks.model";

export const feedbacksFetchInProgress = createAction('[ Feedbacks ] in progress');

export const feedbacksFetchSuccess = createAction(
  '[ List of Feedbacks ] fetch success',
  props<{feedbacks : Array<FeedbacksModel> }>()
);

export const feedbacksFetchFailure = createAction(
  '[ Feedbacks ] fetch fail'
);
