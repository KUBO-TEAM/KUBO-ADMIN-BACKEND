import { createAction, props } from "@ngrx/store";
import { AiModel } from "src/app/modules/ai-model/core/domain/ai.model";

export const getLatestAiModelInProgress = createAction(
  '[Get Latest Ai Model ] in progress'
)

export const getLatestAiModelSuccess = createAction(
  '[Get Latest Ai Model ] success',
  props<{aiModel: AiModel}>(),
)

export const getLatestAiModelFails = createAction(
  '[Get Latest Ai Model ] fails'
)
