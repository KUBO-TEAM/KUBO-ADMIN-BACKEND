import { createAction, props } from "@ngrx/store";
import { RecipeModel } from "src/app/modules/recipe-crud/core/domain/recipe.model";

export const addRecipeInProgress = createAction(
  '[Add Recipe] in progress',
  props<{recipe: RecipeModel}>(),
)

export const addRecipeSuccess = createAction(
  '[Add Recipe] success'
);
