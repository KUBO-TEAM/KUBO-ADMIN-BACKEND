import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeRepository } from '../../core/repositories/recipe.repository';
import { RecipeRepositoryImpl } from '../../data/repository/recipe-repository/recipe-repository-impl';
import { cropImageReducer } from './crop_image/crop_image.reducer';
import { StoreModule } from '@ngrx/store';
import { getAllRecipeReducer } from './recipe/get-all-recipes/get-all-recipe-reducer';
import { getRecipeReducer } from './recipe/get-recipe/get-recipe-reducer';


const reducer:object = {
  cropImageReducer: cropImageReducer,
  getAllRecipeReducer: getAllRecipeReducer,
  getRecipeReducer: getRecipeReducer,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducer),
  ],
  providers: [
    { provide: RecipeRepository, useClass: RecipeRepositoryImpl }
  ]
})
export class NgrxModule { }
