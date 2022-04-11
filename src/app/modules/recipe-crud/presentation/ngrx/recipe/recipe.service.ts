import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { base64ToFile } from 'ngx-image-cropper';
import { LoadingService } from 'src/app/modules/shared/services/loading.service';
import { SnackbarService } from 'src/app/modules/shared/services/snackbar.service';
import { RecipeModel } from '../../../core/domain/recipe.model';
import { AddRecipeUseCase } from '../../../core/usecases/add-recipe.usecase';
import { DeleteRecipeUseCase } from '../../../core/usecases/delete-recipe.usecase';
import { GetAllRecipesUsecase } from '../../../core/usecases/get-all-recipes.usecase';
import { GetRecipeUseCase } from '../../../core/usecases/get-recipe-usecase';
import { UpdateRecipeUseCase } from '../../../core/usecases/update-recipe.usecase';
import { cropImageReset } from '../crop_image/crop_image.reducer';
import { recipeFetchInProgress, recipeFetchSuccess } from './get-all-recipes/get-all-recipe-actions';
import { singleRecipeSuccess } from './get-recipe/get-recipe-actions';

interface CachedRecipe{
  form: FormGroup,
  categories: Array<string>,
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  constructor(
    private getAllRecipeUsecase: GetAllRecipesUsecase,
    private getRecipeUseCase: GetRecipeUseCase,
    private addRecipeUseCase: AddRecipeUseCase,
    private deleteRecipeUseCase: DeleteRecipeUseCase,
    private updateRecipeUseCase: UpdateRecipeUseCase,
    private store: Store<{}>,
    private route: Router,
    private _snackBarServices : SnackbarService,
    private loadingService : LoadingService,
  ) { }

  private selectedRecipes : Array<RecipeModel> = [];
  private cachedRecipe : CachedRecipe | undefined;

  getAllRecipe(){
    console.log('test');

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


    // if(recipe.displayPhoto){
    //   const recipeFormData = new FormData();

    //   recipeFormData.append('name', recipe.name);
    //   recipeFormData.append('description', recipe.description);
    //   recipeFormData.append('reference', recipe.reference);
    //   recipeFormData.append('ingredients', JSON.stringify(recipe.ingredients));
    //   recipeFormData.append('displayPhoto', base64ToFile(recipe.displayPhoto));

    //   this.store.dispatch(cropImageReset());
    //   this.resetCacheRecipe();
    //   this.route.navigate(['/overview']);

    //   this.loadingService.toggleLoadingStatus();


    //   this.addRecipeUseCase.execute(recipeFormData).subscribe((response: { message: string })=> {
    //     const message = response.message;

    //     this.loadingService.toggleLoadingStatus();
    //     this._snackBarServices.openDuratedSnackBar(message);
    //   });
    // }

  }

  deleteRecipe() : void{

    this.loadingService.toggleLoadingStatus();

    for(let recipe of this.selectedRecipes){

        if(recipe._id){
          this.deleteRecipeUseCase.execute(recipe._id).subscribe(
              {
                next: (v) => {
                  this.getAllRecipe();
                  this.loadingService.toggleLoadingStatus();
                  this._snackBarServices.openDuratedSnackBar(v.message);
                },
                error: (e) =>{

                }
              }
            )
        }

    }

  }

  updateRecipe(recipe : RecipeModel, _id? : string): void {

    const recipeFormData = new FormData();


    // if( _id){
    //   recipeFormData.append('name', recipe.name);
    //   recipeFormData.append('description', recipe.description);
    //   recipeFormData.append('reference', recipe.reference);
    //   recipeFormData.append('ingredients', JSON.stringify(recipe.ingredients));

    //   this.loadingService.toggleLoadingStatus();

    //   this.store.dispatch(cropImageReset());
    //   this.resetCacheRecipe();
    //   this.route.navigate(['/overview']);

    //   if(recipe.displayPhoto){
    //     recipeFormData.append('displayPhoto', base64ToFile(recipe.displayPhoto));
    //   }

    //   this.updateRecipeUseCase.execute({ form : recipeFormData, _id }).subscribe((response: { message: string })=> {
    //     const message = response.message;

    //     this.loadingService.toggleLoadingStatus();
    //     this._snackBarServices.openDuratedSnackBar(message);
    //   });

    // }
  }

  updateSelectedRecipes(param: Array<RecipeModel>): void {
    this.selectedRecipes = param;
  }

  setCachedRecipe(param: CachedRecipe ): void {
    this.cachedRecipe = param;
  }

  getCachedRecipe(): CachedRecipe | undefined {
    return this.cachedRecipe;
  }

  resetCacheRecipe(): void {
    this.cachedRecipe = undefined;
  }


}
