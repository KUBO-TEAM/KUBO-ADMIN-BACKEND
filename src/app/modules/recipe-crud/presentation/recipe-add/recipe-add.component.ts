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

    $event.imagePath$.pipe(take(1)).subscribe((imagePath : any)=>{
      this.recipeService.addRecipe(
        {
          form: $event.form,
          categories: $event.categories,
          imagePath,
        }
      );
    });

  }

}
