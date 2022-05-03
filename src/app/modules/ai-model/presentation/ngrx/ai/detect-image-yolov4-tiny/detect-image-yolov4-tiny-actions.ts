import { createAction, props } from "@ngrx/store";

export const detectImageYolov4TinyInProgress = createAction(
  '[Detect Image Yolov4 Tiny] in progress'
)

export const detectImageYolov4TinySuccess = createAction(
  '[Detect Image Yolov4 Tiny] success',
  props<{imageUrl: string}>(),
)

export const detectImageYolov4TinyFails = createAction(
  '[Detect Image Yolov4 Tiny] fails'
)
