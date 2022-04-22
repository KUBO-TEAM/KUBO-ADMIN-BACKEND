import { createAction, props } from "@ngrx/store";

export const detectImageInProgress = createAction(
  '[Detect Image] in progress'
)

export const detectImageSuccess = createAction(
  '[Detect Image] success',
  props<{imageUrl: string}>(),
)

export const detectImageFails = createAction(
  '[Detect Image] fails'
)
