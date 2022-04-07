import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { RecipeRepository } from "../repositories/recipe.repository";

@Injectable({
  providedIn: 'root'
})
export class UpdateRecipeUseCase implements UseCase<{form: FormData, _id: string}, {message: string}>{

  constructor(
    private recipeRepository: RecipeRepository,
  ){}

  execute(params: {form: FormData, _id: string}): Observable<{message: string}> {
    return this.recipeRepository.updateRecipe(params);
  }

}
