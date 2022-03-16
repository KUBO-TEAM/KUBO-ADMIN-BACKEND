import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { RecipeModel } from "../domain/recipe.model";
import { RecipeRepository } from "../repositories/recipe.repository";

@Injectable({
  providedIn: 'root'
})
export class AddRecipeUseCase implements UseCase<RecipeModel, {message: string}>{

  constructor(
    private recipeRepository: RecipeRepository,
  ){}

  execute(params: RecipeModel): Observable<{message: string}> {
    return this.recipeRepository.addRecipe(params);
  }

}
