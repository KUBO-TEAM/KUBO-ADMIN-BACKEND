import { Injectable } from "@angular/core";
import { filter, from, map, mergeMap, Observable } from "rxjs";
import { RecipeModel } from "../../../core/domain/recipe.model";
import { RecipeRepository } from "../../../core/repositories/recipe.repository";
import { RecipeMockRepositoryMapper } from "./recipe-mock-repository-mapper";

@Injectable({
  providedIn: 'root'
})
export class RecipeMockRepositoryImpl extends RecipeRepository{
  private mapper = new RecipeMockRepositoryMapper();

  remoteMockData = {
    message : 'Successfully Fetch',
    data : [
      {
        '_id': '1',
        'name': 'Adobong Manok',
        'description': 'Masarap Ito',
        'reference': 'Panlasang Pinoy',
        'ingredients': ['Kamatis', 'Sibuyas']
      },
    ]
  }


  constructor(){
    super();
  }

  getAllRecipes(): Observable<RecipeModel> {
    return from(this.remoteMockData.data)
      .pipe(map(this.mapper.mapFrom));
  }

  getRecipe(_id: string): Observable<RecipeModel> {
    return from(this.remoteMockData.data)
      .pipe(filter((item)=> item._id == _id))
      .pipe(map(this.mapper.mapFrom));
  }



}
