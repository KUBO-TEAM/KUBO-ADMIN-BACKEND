import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { RecipeModel } from "../domain/recipe.model";
import { RecipeRepository } from "../repositories/recipe.repository";

@Injectable({
  providedIn: 'root'
})
export class DeleteRecipeUseCase implements UseCase<string, {message: string}>{

  constructor(
    private recipeRepository: RecipeRepository,
  ){}

  execute(param: string): Observable<{message: string}> {
    return this.recipeRepository.deleteRecipe(param);
  }

}
