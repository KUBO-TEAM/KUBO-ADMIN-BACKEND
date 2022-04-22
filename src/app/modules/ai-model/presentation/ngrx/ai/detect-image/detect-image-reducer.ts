import { createReducer, on } from "@ngrx/store";
import { detectImageFails, detectImageInProgress, detectImageSuccess } from "./detect-image-actions";


let DETECT_IMAGE_INITIAL_STATE : any;

const DETECT_IMAGE_REDUCER = createReducer(
  DETECT_IMAGE_INITIAL_STATE,
  on(detectImageInProgress, (state) => undefined),
  on(detectImageSuccess, (state, {imageUrl})=> imageUrl),
  on(detectImageFails, (state) => state),
);

export function detectImageReducer(state: any, action: any){
  return DETECT_IMAGE_REDUCER(state, action);
}
