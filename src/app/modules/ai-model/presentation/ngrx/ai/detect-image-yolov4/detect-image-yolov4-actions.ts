import { createAction, props } from "@ngrx/store";

export const detectImageYolov4InProgress = createAction(
  '[Detect Image Yolov4] in progress'
)

export const detectImageYolov4Success = createAction(
  '[Detect Image Yolov4] success',
  props<{imageUrl: string}>(),
)

export const detectImageYolov4Fails = createAction(
  '[Detect Image Yolov4] fails'
)
