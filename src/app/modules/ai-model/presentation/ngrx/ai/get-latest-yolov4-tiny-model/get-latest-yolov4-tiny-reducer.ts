import { createReducer, on } from "@ngrx/store";
import { getLatestYolov4TinyModelFails, getLatestYolov4TinyModelInProgress, getLatestYolov4TinyModelSuccess } from "./get-latest-yolov4-tiny-actions";


let GET_LATEST_YOLOV4_TINY_MODEL_INITIAL_STATE : any;

const GET_LATEST_YOLOV4_TINY_MODEL_REDUCER = createReducer(
  GET_LATEST_YOLOV4_TINY_MODEL_INITIAL_STATE,
  on(getLatestYolov4TinyModelInProgress, (state) => undefined),
  on(getLatestYolov4TinyModelSuccess, (state, {aiModel})=> aiModel),
  on(getLatestYolov4TinyModelFails, (state) => state),
);

export function getLatestYolov4TinyModelReducer(state: any, action: any){
  return GET_LATEST_YOLOV4_TINY_MODEL_REDUCER(state, action);
}
