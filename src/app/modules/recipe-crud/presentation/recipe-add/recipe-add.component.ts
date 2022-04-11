import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Observable, take } from 'rxjs';
import { RecipeService } from '../ngrx/recipe/recipe.service';
@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.sass']
})
export class RecipeAddComponent {

  constructor(
    private recipeService: RecipeService,
  ) { }

  submit($event: {
      form : FormGroup,
      imagePath$: Observable<string | null>,
      categories: Array<string>
  }): void {

    const name = $event.form.get('name');
    const description = $event.form.get('description');
    const reference = $event.form.get('reference');

    const ingredients = $event.form.controls['ingredients'] as FormArray;
    const instructions = $event.form.controls['instructions'] as FormArray;

    console.log(instructions.getRawValue());

    // $event.imagePath$.pipe(take(1)).subscribe((imagePath : any)=>{
    //   this.recipeService.addRecipe(
    //     {
    //       name: name?.value,
    //       description: description?.value,
    //       categories: $event.categories,
    //       reference: reference?.value,
    //       displayPhoto: imagePath,
    //     }
    //   );
    // });

  }

}
