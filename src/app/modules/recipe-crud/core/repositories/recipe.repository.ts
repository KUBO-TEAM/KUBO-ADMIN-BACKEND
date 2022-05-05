import { Observable } from "rxjs";
import { RecipeModel } from "../domain/recipe.model";

export abstract class RecipeRepository{

  abstract getAllRecipes() : Observable<{message: string, data:  Array<RecipeModel>}>;
  abstract getRecipe(_id: string) : Observable<RecipeModel>;

  abstract addRecipe(recipeFormData: FormData) : Observable<{message : string}>;
  abstract deleteRecipe(_id: string) : Observable<{message: string}>;

  abstract updateRecipe(params: { form: FormData, _id : string}) : Observable<{message: string}>;
}
