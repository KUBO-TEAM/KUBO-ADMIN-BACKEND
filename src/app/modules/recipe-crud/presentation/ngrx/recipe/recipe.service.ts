import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
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
import { cropImageReset, CropImageState } from '../crop_image/crop_image.reducer';
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
    {form, categories, imagePath}: {
      form : FormGroup,
      categories: Array<string>,
      imagePath: CropImageState,
    }
  ){

    const {
      name,
      description,
      reference,
      course,
      cuisine,
      prep_time,
      cook_time,
      servings
    } = form.controls;

    if(form.invalid){
      this._snackBarServices.openDuratedSnackBar('Invalid inputs, double check your inputs');
      return;
    }


    if(categories.length <= 0){
      this._snackBarServices.openDuratedSnackBar('Please pick a category');
      return;
    }

    if(typeof imagePath !== 'string'){
      this._snackBarServices.openDuratedSnackBar('Please pick an image');
      return;
    }

    const formData = new FormData();

    formData.append('name', name.value);
    formData.append('description', description.value);
    formData.append('reference', reference.value);
    formData.append('course', course.value);
    formData.append('cuisine', cuisine.value);
    formData.append('prep_time', prep_time.value);
    formData.append('cook_time', cook_time.value);
    formData.append('servings', servings.value);
    formData.append('categories', JSON.stringify(categories));
    formData.append('displayPhoto', base64ToFile(imagePath));


    const ingredients = form.controls['ingredients'] as FormArray;
    const instructions = form.controls['instructions'] as FormArray;

    formData.append('ingredients', JSON.stringify(ingredients.getRawValue()));
    formData.append('instructions', JSON.stringify(instructions.getRawValue()));

    this.store.dispatch(cropImageReset());
    this.resetCacheRecipe();
    this.route.navigate(['/overview']);

    this.loadingService.toggleLoadingStatus();


    this.addRecipeUseCase.execute(formData).subscribe((response: { message: string })=> {
      const message = response.message;

      this.loadingService.toggleLoadingStatus();
      this._snackBarServices.openDuratedSnackBar(message);
      this.getAllRecipe();

    });

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
                  this.loadingService.toggleLoadingStatus();
                  this._snackBarServices.openDuratedSnackBar(e.message);
                }
              }
            )
        }

    }

  }

  updateRecipe({
    _id,
    form,
    imagePath,
    categories,
  } : {
    _id ?: string,
    form : FormGroup,
    imagePath : CropImageState,
    categories: Array<string>,
  }): void {


    const {
      name,
      description,
      reference,
      course,
      cuisine,
      prep_time,
      cook_time,
      servings
    } = form.controls;

    if(form.invalid){
      this._snackBarServices.openDuratedSnackBar('Invalid inputs, double check your inputs');
      return;
    }

    if(typeof _id !== 'string'){
      this._snackBarServices.openDuratedSnackBar('Error updating, cannot find the id');
      return;
    }

    const formData = new FormData();

    formData.append('name', name.value);
    formData.append('description', description.value);
    formData.append('reference', reference.value);
    formData.append('course', course.value);
    formData.append('cuisine', cuisine.value);
    formData.append('prep_time', prep_time.value);
    formData.append('cook_time', cook_time.value);
    formData.append('servings', servings.value);
    formData.append('categories', JSON.stringify(categories));

    if(typeof imagePath === 'string')
      formData.append('displayPhoto', base64ToFile(imagePath));



    const ingredients = form.controls['ingredients'] as FormArray;
    const instructions = form.controls['instructions'] as FormArray;

    formData.append('ingredients', JSON.stringify(ingredients.getRawValue()));
    formData.append('instructions', JSON.stringify(instructions.getRawValue()));

    this.loadingService.toggleLoadingStatus();
    this.store.dispatch(cropImageReset());
    this.resetCacheRecipe();
    this.route.navigate(['/overview']);

    this.updateRecipeUseCase.execute({ form : formData, _id }).subscribe((response: { message: string })=> {
      const message = response.message;

      this.loadingService.toggleLoadingStatus();
      this._snackBarServices.openDuratedSnackBar(message);
      this.getAllRecipe();

    });
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
