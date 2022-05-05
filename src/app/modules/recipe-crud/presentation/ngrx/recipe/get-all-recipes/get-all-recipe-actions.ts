import { createAction, props } from "@ngrx/store";
import { RecipeModel } from "src/app/modules/recipe-crud/core/domain/recipe.model";

export const recipeFetchInProgress = createAction('[ Recipe ] in progress');

export const recipeFetchSuccess = createAction(
  '[ List of Recipes ] fetch success',
  props<{recipes : Array<RecipeModel> }>()
);

export const recipeFetchFailure = createAction(
  '[ Recipe ] fetch fail'
);
