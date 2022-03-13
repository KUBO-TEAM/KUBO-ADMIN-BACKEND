import { createReducer, on } from "@ngrx/store";
import { RecipeModel } from "src/app/modules/recipe-crud/core/domain/recipe.model";
import { recipeFetchFailure, recipeFetchInProgress, recipeFetchSuccess } from "./get-all-recipe-actions";


const GET_ALL_RECIPE_INITIAL_STATE : Array<RecipeModel> = [];

const GET_ALL_RECIPE_REDUCER = createReducer(
  GET_ALL_RECIPE_INITIAL_STATE,
  on(recipeFetchInProgress, (state) => state),
  on(recipeFetchSuccess, (state, {recipe}) => [...state , recipe]),
  on(recipeFetchFailure, (state) => state),
);

export function getAllRecipeReducer(state: any, action: any){
  return GET_ALL_RECIPE_REDUCER(state, action);
}
