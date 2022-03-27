import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecipeModel } from '../../core/domain/recipe.model';
import { cropImage } from '../ngrx/crop_image/crop_image.reducer';
import { RecipeService } from '../ngrx/recipe/recipe.service';
@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.sass']
})
export class RecipeInfoComponent implements OnInit, OnDestroy {

  @Input('recipe') recipe: RecipeModel | null  = null;

  imagePath$ : Observable<string | null>;
  recipeInprogress$ : Observable<RecipeModel | undefined>;
  form : FormGroup;

  ingredients: Array<string> = [];

  ingredientList : string[] = [
    'Talong',
    'Okra',
    'Repolyo',
    'Ampalaya',
    'KangKong',
    'Carrot',
    'Kamatis',
    'Sayote',
    'Upo',
    'Sitaw',
  ];

  constructor(
    private _fb: FormBuilder,
    private router : Router,
    private store : Store<{ cropImageReducer : string | null, addRecipeReducer: RecipeModel | undefined }>,
    private recipeService: RecipeService,
  ) {
    this.imagePath$ = this.store.select('cropImageReducer');
    this.recipeInprogress$ = this.store.select('addRecipeReducer');

    this.form = this._fb.group({
      name: [],
      description: [],
      reference: [],
    });

   }


  ngOnDestroy(): void {
    this.recipeService.addRecipeInProgress({
      ...this.form.value,
      ingredients: this.ingredients,
    });
  }

  ngOnInit(): void {
    if(this.recipe){
      this.form.patchValue({
        name: this.recipe.name,
        description: this.recipe.description,
        reference: this.recipe.reference,
      });
    }else{

      this.recipeInprogress$.pipe(take(1)).subscribe((recipe : any)=>{

        if(recipe){
          this.form.patchValue({
            ...recipe,
          });
        }
      });

    }
  }


  fileChangeEvent(event: any) {
    this.store.dispatch(cropImage({event}));
    this.router.navigate(['/overview/add/crop-image']);
  }


  ingredientsListener($event: {checked: boolean, value: string }){

    if($event.checked){
      this.ingredients.push($event.value);
    }else{
      this.ingredients = this.ingredients.filter((ingredient) => ingredient != $event.value);
    }

  }

  submit(){
    const name = this.form.get('name');
    const description = this.form.get('description');
    const reference = this.form.get('reference');


    this.imagePath$.pipe(take(1)).subscribe((imagePath : any)=>{

      this.recipeService.addRecipeSuccess(
        {
          name: name?.value,
          description: description?.value,
          ingredients: this.ingredients,
          reference: reference?.value,
          displayPhoto: imagePath,
        }
      );


    });


  }

}
