import { createReducer, on } from "@ngrx/store";
import { FeedbacksModel } from "../../../core/domain/feedbacks.model";
import { feedbacksFetchFailure, feedbacksFetchInProgress, feedbacksFetchSuccess } from "./get-all-feedbacks-actions";


const GET_ALL_FEEDBACKS_INITIAL_STATE : Array<FeedbacksModel> = [];

const GET_ALL_FEEDBACKS_REDUCER = createReducer(
  GET_ALL_FEEDBACKS_INITIAL_STATE,
  on(feedbacksFetchInProgress, (state) => state),
  on(feedbacksFetchSuccess, (state, {feedbacks}) => feedbacks),
  on(feedbacksFetchFailure, (state) => state),
);

export function getAllFeedbacksReducer(state: any, action: any){
  return GET_ALL_FEEDBACKS_REDUCER(state, action);
}
