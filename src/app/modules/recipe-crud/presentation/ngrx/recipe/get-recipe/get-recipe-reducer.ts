import { createReducer, on } from "@ngrx/store";
import { RecipeModel } from "src/app/modules/recipe-crud/core/domain/recipe.model";
import { singleRecipeFails, singleRecipeSuccess } from "./get-recipe-actions";


let GET_RECIPE_INITIAL_STATE : RecipeModel | undefined;

const GET_RECIPE_REDUCER = createReducer(
  GET_RECIPE_INITIAL_STATE,
  on(singleRecipeSuccess, (state, {recipe})=> recipe),
  on(singleRecipeFails, (state) => state),
);

export function getRecipeReducer(state: any, action: any){
  return GET_RECIPE_REDUCER(state, action);
}
