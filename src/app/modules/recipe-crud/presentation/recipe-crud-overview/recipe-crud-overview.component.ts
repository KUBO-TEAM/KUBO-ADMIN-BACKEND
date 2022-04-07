import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../core/domain/recipe.model';
import { RecipeService } from '../ngrx/recipe/recipe.service';

@Component({
  selector: 'app-recipe-crud-overview',
  templateUrl: './recipe-crud-overview.component.html',
  styleUrls: ['./recipe-crud-overview.component.sass']
})
export class RecipeCrudOverviewComponent implements OnInit {

  recipes$: Observable<Array<RecipeModel>>;

  constructor(
    private recipeService: RecipeService,
    private store: Store<{ getAllRecipeReducer: Array<RecipeModel>}>,
  ) {
    this.recipes$ = this.store.select('getAllRecipeReducer');
  }

  ngOnInit(): void {
    this.recipeService.getAllRecipe();
  }

  deleteRecipe(): void{
    this.recipeService.deleteRecipe();
  }
}
