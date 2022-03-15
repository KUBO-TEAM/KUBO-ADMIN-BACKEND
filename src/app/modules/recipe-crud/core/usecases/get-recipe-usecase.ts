import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { RecipeModel } from "../domain/recipe.model";
import { RecipeRepository } from "../repositories/recipe.repository";

@Injectable({
  providedIn: 'root',
})
export class GetRecipeUseCase implements UseCase<string, RecipeModel>{

  constructor(
    private recipeRepository: RecipeRepository,
  ){}

  execute(_id: string): Observable<RecipeModel> {
    return this.recipeRepository.getRecipe(_id);
  }

}
