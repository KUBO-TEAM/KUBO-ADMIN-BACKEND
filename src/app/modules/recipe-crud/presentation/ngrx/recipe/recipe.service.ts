import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { RecipeModel } from '../../../core/domain/recipe.model';
import { AddRecipeUseCase } from '../../../core/usecases/add-recipe.usecase';
import { GetAllRecipesUsecase } from '../../../core/usecases/get-all-recipes.usecase';
import { GetRecipeUseCase } from '../../../core/usecases/get-recipe-usecase';
import { cropImageReset } from '../crop_image/crop_image.reducer';
import { recipeFetchInProgress, recipeFetchSuccess } from './get-all-recipes/get-all-recipe-actions';
import { singleRecipeSuccess } from './get-recipe/get-recipe-actions';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(
    private getAllRecipeUsecase: GetAllRecipesUsecase,
    private getRecipeUseCase: GetRecipeUseCase,
    private addRecipeUseCase: AddRecipeUseCase,
    private store: Store<{}>,
    private route: Router,
  ) { }

  getAllRecipe(){
    this.store.dispatch(recipeFetchInProgress());

    this.getAllRecipeUsecase.execute().subscribe((value: RecipeModel)=>{
      this.store.dispatch(recipeFetchSuccess({recipe: value}));
    });
  }

  getRecipe(_id : string ){
    this.getRecipeUseCase.execute(_id).subscribe((value: RecipeModel)=>{
      this.store.dispatch(singleRecipeSuccess({recipe: value}));
    });
  }

  addRecipe(
    recipe: RecipeModel
  ){


    if(recipe.displayPhoto){
      fetch(recipe.displayPhoto)
      .then(res => res.blob())
      .then(displayPhoto => {

        const recipeFormData = new FormData();

        recipeFormData.append('name', recipe.name);
        recipeFormData.append('description', recipe.description);
        recipeFormData.append('reference', recipe.reference);
        recipeFormData.append('ingredients', JSON.stringify(recipe.ingredients));
        recipeFormData.append('displayPhoto', displayPhoto);

        this.addRecipeUseCase.execute(recipeFormData).subscribe((response: { message: string })=> {
          const message = response.message;

          this.store.dispatch(cropImageReset());
          this.route.navigate(['/overview']);

        });

      });
    }


  }


}
