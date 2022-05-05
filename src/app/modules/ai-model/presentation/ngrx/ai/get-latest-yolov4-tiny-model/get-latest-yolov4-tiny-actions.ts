import { createAction, props } from "@ngrx/store";
import { AiModel } from "src/app/modules/ai-model/core/domain/ai.model";

export const getLatestYolov4TinyModelInProgress = createAction(
  '[Get Latest Yolov4 Tiny Model ] in progress'
)

export const getLatestYolov4TinyModelSuccess = createAction(
  '[Get Latest Yolov4Tiny Model ] success',
  props<{aiModel: AiModel}>(),
)

export const getLatestYolov4TinyModelFails = createAction(
  '[Get Latest Yolov4 Tiny Model ] fails'
)
