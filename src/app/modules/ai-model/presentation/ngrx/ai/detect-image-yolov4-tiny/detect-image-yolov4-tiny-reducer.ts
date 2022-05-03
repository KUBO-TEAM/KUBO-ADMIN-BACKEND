import { createReducer, on } from "@ngrx/store";
import { detectImageYolov4TinyFails, detectImageYolov4TinyInProgress, detectImageYolov4TinySuccess } from "./detect-image-yolov4-tiny-actions";


let DETECT_IMAGE_YOLOV4_TINY_INITIAL_STATE : any;

const DETECT_IMAGE_YOLOV4_TINY_REDUCER = createReducer(
  DETECT_IMAGE_YOLOV4_TINY_INITIAL_STATE,
  on(detectImageYolov4TinyInProgress, (state) => undefined),
  on(detectImageYolov4TinySuccess, (state, {imageUrl})=> imageUrl),
  on(detectImageYolov4TinyFails, (state) => state),
);

export function detectImageYolov4TinyReducer(state: any, action: any){
  return DETECT_IMAGE_YOLOV4_TINY_REDUCER(state, action);
}
