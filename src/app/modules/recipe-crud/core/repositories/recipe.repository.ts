import { Observable } from "rxjs";
import { RecipeModel } from "../domain/recipe.model";

export abstract class RecipeRepository{
  abstract getAllRecipes() : Observable<RecipeModel>;
}
