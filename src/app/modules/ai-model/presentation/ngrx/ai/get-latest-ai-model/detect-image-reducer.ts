import { createReducer, on } from "@ngrx/store";
import { AiModel } from "src/app/modules/ai-model/core/domain/ai.model";
import { getLatestAiModelFails, getLatestAiModelInProgress, getLatestAiModelSuccess } from "./detect-image-actions";


let GET_LATEST_AI_MODEL_INITIAL_STATE : any;

const GET_LATEST_AI_MODEL_REDUCER = createReducer(
  GET_LATEST_AI_MODEL_INITIAL_STATE,
  on(getLatestAiModelInProgress, (state) => undefined),
  on(getLatestAiModelSuccess, (state, {aiModel})=> aiModel),
  on(getLatestAiModelFails, (state) => state),
);

export function getLatestAiModelReducer(state: any, action: any){
  return GET_LATEST_AI_MODEL_REDUCER(state, action);
}
