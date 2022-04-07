import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../core/domain/recipe.model';
import { cropImage } from '../ngrx/crop_image/crop_image.reducer';
import { RecipeService } from '../ngrx/recipe/recipe.service';

import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SelectionModel } from '@angular/cdk/collections';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.sass']
})
export class RecipeInfoComponent implements OnChanges, OnInit {

  @Input('recipe') recipe !: RecipeModel | null;
  @Output('onSubmit') onSubmit = new EventEmitter<{
    recipeId ?: string,
    form : FormGroup,
    imagePath$ : Observable<string | null>,
    ingredients: Array<string>,
  }>();

  imagePath$ : Observable<string | null>;
  recipeInprogress$ : Observable<RecipeModel | undefined>;
  form : FormGroup;

  ingredients = new SelectionModel<string>(true, []);

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

  matcher = new MyErrorStateMatcher();

  constructor(
    private _fb: FormBuilder,
    private router : Router,
    private store : Store<{ cropImageReducer : string | null, addRecipeReducer: RecipeModel | undefined }>,
    private recipeService: RecipeService,
  ) {
    this.imagePath$ = this.store.select('cropImageReducer');
    this.recipeInprogress$ = this.store.select('addRecipeReducer');

    this.form = this._fb.group({
      name: ['', [Validators.required] ],
      description: ['', [Validators.required] ],
      reference: ['', [Validators.required] ],
    });

   }
  ngOnInit(): void {
    const cachedRecipe = this.recipeService.getCachedRecipe();

    if(cachedRecipe){
      this.form = cachedRecipe.form;
      this.ingredients.select(...cachedRecipe.ingredients);
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.recipe){
      this.form.patchValue({
        name: this.recipe.name,
        description: this.recipe.description,
        reference: this.recipe.reference,
      });

      this.ingredients.clear();
      this.ingredients.select(...this.recipe.ingredients);
    }
  }

  emitOnSubmit() : void{
    this.onSubmit.emit({
      recipeId: this.recipe?._id,
      form : this.form,
      imagePath$:  this.imagePath$,
      ingredients: this.ingredients.selected,
    });
  }

  fileChangeEvent(event: any) {
    this.store.dispatch(cropImage({event}));
    this.recipeService.setCachedRecipe({ form: this.form, ingredients: this.ingredients.selected });
    this.router.navigate(['/overview/add/crop-image']);
  }


  ingredientsListener(value: string){
    this.ingredients.toggle(value);
  }


}
