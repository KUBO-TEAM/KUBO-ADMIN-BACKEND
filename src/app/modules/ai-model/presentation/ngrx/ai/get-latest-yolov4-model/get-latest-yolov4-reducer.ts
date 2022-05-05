import { createReducer, on } from "@ngrx/store";
import { getLatestYolov4ModelFails, getLatestYolov4ModelInProgress, getLatestYolov4ModelSuccess } from "./get-latest-yolov4-actions";


let GET_LATEST_YOLOV4_MODEL_INITIAL_STATE : any;

const GET_LATEST_YOLOV4_MODEL_REDUCER = createReducer(
  GET_LATEST_YOLOV4_MODEL_INITIAL_STATE,
  on(getLatestYolov4ModelInProgress, (state) => undefined),
  on(getLatestYolov4ModelSuccess, (state, {aiModel})=> aiModel),
  on(getLatestYolov4ModelFails, (state) => state),
);

export function getLatestYolov4ModelReducer(state: any, action: any){
  return GET_LATEST_YOLOV4_MODEL_REDUCER(state, action);
}
