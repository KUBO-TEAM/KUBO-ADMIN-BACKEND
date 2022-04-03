import { createReducer, on } from "@ngrx/store";
import { RecipeModel } from "src/app/modules/recipe-crud/core/domain/recipe.model";
import { addRecipeInProgress, addRecipeSuccess } from "./add-recipe-action";

let ADD_RECIPE_INITIAL_STATE : RecipeModel | undefined;


const ADD_RECIPE_REDUCER = createReducer(
  ADD_RECIPE_INITIAL_STATE,
  on(addRecipeInProgress,(state, {recipe}) => {

    if(state){
      return {
        ...state,
        ...recipe,
      }
    }

    return recipe;
  }

  ),
  on(addRecipeSuccess, (state)=> state),
)

export function addRecipeReducer(state: any, action: any){
  return ADD_RECIPE_REDUCER(state, action);
}
