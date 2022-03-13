import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipeModel } from '../../../core/domain/recipe.model';
import { GetAllRecipesUsecase } from '../../../core/usecases/get-all-recipes.usecase';
import { recipeFetchSuccess } from './get-all-recipes/get-all-recipe-actions';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(
    private getAllRecipeUsecase: GetAllRecipesUsecase,
    private store: Store<{}>,
  ) { }

  getAllRecipe(){
    this.getAllRecipeUsecase.execute().subscribe((value: RecipeModel)=>{
      this.store.dispatch(recipeFetchSuccess({recipe: value}));
    });
  }
}
