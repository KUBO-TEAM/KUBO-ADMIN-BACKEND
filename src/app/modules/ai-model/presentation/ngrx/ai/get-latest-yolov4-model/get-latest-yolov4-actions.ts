import { createAction, props } from "@ngrx/store";
import { AiModel } from "src/app/modules/ai-model/core/domain/ai.model";

export const getLatestYolov4ModelInProgress = createAction(
  '[Get Latest Yolov4 Model ] in progress'
)

export const getLatestYolov4ModelSuccess = createAction(
  '[Get Latest Yolov4 Model ] success',
  props<{aiModel: AiModel}>(),
)

export const getLatestYolov4ModelFails = createAction(
  '[Get Latest Yolov4 Model ] fails'
)
