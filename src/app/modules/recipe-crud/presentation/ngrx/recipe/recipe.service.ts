import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RecipeModel } from '../../../core/domain/recipe.model';
import { GetAllRecipesUsecase } from '../../../core/usecases/get-all-recipes.usecase';
import { GetRecipeUseCase } from '../../../core/usecases/get-recipe-usecase';
import { recipeFetchSuccess } from './get-all-recipes/get-all-recipe-actions';
import { singleRecipeSuccess } from './get-recipe/get-recipe-actions';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(
    private getAllRecipeUsecase: GetAllRecipesUsecase,
    private getRecipeUseCase: GetRecipeUseCase,
    private store: Store<{}>,
  ) { }

  getAllRecipe(){
    this.getAllRecipeUsecase.execute().subscribe((value: RecipeModel)=>{
      this.store.dispatch(recipeFetchSuccess({recipe: value}));
    });
  }

  getRecipe(_id : string ){
    this.getRecipeUseCase.execute(_id).subscribe((value: RecipeModel)=>{
      this.store.dispatch(singleRecipeSuccess({recipe: value}));
    });
  }

}
