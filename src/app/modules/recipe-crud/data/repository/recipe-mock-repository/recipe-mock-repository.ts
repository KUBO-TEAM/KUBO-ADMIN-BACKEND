import { Injectable } from "@angular/core";
import { from, map, Observable } from "rxjs";
import { RecipeModel } from "../../../core/domain/recipe.model";
import { RecipeRepository } from "../../../core/repositories/recipe.repository";
import { RecipeMockRepositoryMapper } from "./recipe-mock-repository-mapper";

@Injectable({
  providedIn: 'root'
})
export class RecipeMockRepositoryImpl extends RecipeRepository{

  private mapper = new RecipeMockRepositoryMapper();

  recipes = [
    {
      '_id': '1',
      'name': 'Adobong Manok',
      'description': 'Masarap Ito',
      'reference': 'Panlasang Pinoy',
      'ingredients': ['Kamatis', 'Sibuyas']
    },

  ];

  constructor(){
    super();
  }

  getAllRecipes(): Observable<RecipeModel> {
    return from(this.recipes)
      .pipe(map(this.mapper.mapFrom));
  }

}
