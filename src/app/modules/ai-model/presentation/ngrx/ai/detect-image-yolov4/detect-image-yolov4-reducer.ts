import { createReducer, on } from "@ngrx/store";
import { detectImageYolov4Fails, detectImageYolov4InProgress, detectImageYolov4Success } from "./detect-image-yolov4-actions";


let DETECT_IMAGE_YOLOV4_INITIAL_STATE : any;

const DETECT_IMAGE_YOLOV4_REDUCER = createReducer(
  DETECT_IMAGE_YOLOV4_INITIAL_STATE,
  on(detectImageYolov4InProgress, (state) => undefined),
  on(detectImageYolov4Success, (state, {imageUrl})=> imageUrl),
  on(detectImageYolov4Fails, (state) => state),
);

export function detectImageYolov4Reducer(state: any, action: any){
  return DETECT_IMAGE_YOLOV4_REDUCER(state, action);
}
