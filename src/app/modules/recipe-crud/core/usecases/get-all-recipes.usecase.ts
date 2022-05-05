import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { RecipeModel } from "../domain/recipe.model";
import { RecipeRepository } from "../repositories/recipe.repository";


@Injectable({
  providedIn: 'root'
})
export class GetAllRecipesUsecase implements UseCase<void, {message: string, data:  Array<RecipeModel>}>{

  constructor(
    private recipeRepository: RecipeRepository
  ){}

  execute(params: void): Observable<{message: string, data:  Array<RecipeModel>}> {
    return this.recipeRepository.getAllRecipes();
  }

}
