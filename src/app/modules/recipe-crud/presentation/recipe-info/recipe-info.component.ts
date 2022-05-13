import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../core/domain/recipe.model';
import { cropImage, CropImageState } from '../ngrx/crop_image/crop_image.reducer';
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
    imagePath$ : Observable<CropImageState>,
    categories: Array<string>,
  }>();

  imagePath$ : Observable<CropImageState>;
  recipeInprogress$ : Observable<RecipeModel | undefined>;
  form : FormGroup;

  categories = new SelectionModel<string>(true, []);

  categoryList : string[] = [
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
    private store : Store<{ cropImageReducer : CropImageState, addRecipeReducer: RecipeModel | undefined }>,
    private recipeService: RecipeService,
  ) {
    this.imagePath$ = this.store.select('cropImageReducer');
    this.recipeInprogress$ = this.store.select('addRecipeReducer');

    this.form = this._fb.group({
      name: ['', [Validators.required] ],
      prep_time: [null, [Validators.required] ],
      cook_time: [null, [Validators.required] ],
      course: [''],
      cuisine: [''],
      servings: [''],
      description: ['', [Validators.required] ],
      reference: ['', [Validators.required] ],
      youtubeId: [''],
      ingredients: this._fb.array([
        this._fb.group({
          quantity : 1,
          ingredient: ['', [Validators.required]],
        }),
      ]),
      instructions : this._fb.array([
        ['', [Validators.required]]
      ]),
    });

  }

  ngOnInit(): void {
    const cachedRecipe = this.recipeService.getCachedRecipe();

    if(cachedRecipe){
      this.form = cachedRecipe.form;
      this.categories.select(...cachedRecipe.categories);
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.recipe){
      this.form.patchValue({
        ...this.recipe,
        youtubeId : this.recipe.youtubeId || '',
      });

      const instructions = this.form.controls['instructions'] as FormArray;
      const ingredients = this.form.controls['ingredients'] as FormArray;

      /** Patch Instructions */
      if(this.recipe.instructions.length > 0){

        instructions.clear();

        for(let instruction of this.recipe.instructions){
          instructions.push(
            this._fb.control(instruction, [Validators.required])
          );
        }

      }

      /** Patch Ingredients */
      if(this.recipe.ingredients.length > 0){

        ingredients.clear();

        for(let ingredient of this.recipe.ingredients){
          ingredients.push(
            this._fb.group({
              quantity: [ingredient.quantity,  [Validators.required]],
              ingredient: [ingredient.ingredient,  [Validators.required]],
            })
          );

        }
      }


      this.categories.clear();
      this.categories.select(...this.recipe.categories);
    }
  }

  emitOnSubmit() : void{
    this.onSubmit.emit({
      recipeId: this.recipe?._id,
      form : this.form,
      imagePath$:  this.imagePath$,
      categories: this.categories.selected,
    });
  }

  fileChangeEvent(event: any) {
    this.store.dispatch(cropImage({event}));
    this.recipeService.setCachedRecipe({ form: this.form, categories: this.categories.selected });
    this.router.navigate(['admin/overview/add/crop-image']);
  }

  categoriesListener(value: string){
    this.categories.toggle(value);
  }

  addInstruction() : void {
    const instructions = this.form.get('instructions') as FormArray;

    instructions.push(
      this._fb.control(
        '', [Validators.required]
      ),
    );
  }


  get instructions(): FormArray {
    return this.form.controls['instructions'] as FormArray;
  }

  abstractControlToFormGroup(abstractControl : AbstractControl) : FormGroup {
    return abstractControl as FormGroup;
  }

  deleteInstructions(index: number): void{
    const instructions = this.form.controls['instructions'] as FormArray;
    instructions.removeAt(index);
  }


  addIngredient() : void {
    const ingredients = this.form.get('ingredients') as FormArray;

    ingredients.push(
      this._fb.group({
        quantity : 1,
        ingredient : ['', [Validators.required]]
      }),
    );
  }

  get ingredients(): FormArray {
    return this.form.controls['ingredients'] as FormArray;
  }

  deleteIngredients(index: number): void{
    const ingredients = this.form.controls['ingredients'] as FormArray;
    ingredients.removeAt(index);
  }



}
