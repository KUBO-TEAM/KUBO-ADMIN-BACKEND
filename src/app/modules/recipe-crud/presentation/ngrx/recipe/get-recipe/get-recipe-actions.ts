import { createAction, props } from "@ngrx/store";
import { RecipeModel } from "src/app/modules/recipe-crud/core/domain/recipe.model";

export const singleRecipeInProgress = createAction(
  '[Single Recipe] in progress'
)

export const singleRecipeSuccess = createAction(
  '[Single Recipe] success',
  props<{recipe: RecipeModel}>(),
)

export const singleRecipeFails = createAction(
  '[Single Recipe] fails'
)
