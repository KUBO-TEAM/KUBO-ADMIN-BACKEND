import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../core/domain/recipe.model';
import { RecipeService } from '../ngrx/recipe/recipe.service';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.sass']
})
export class RecipeUpdateComponent implements OnInit {

  recipe$ : Observable<RecipeModel>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private store: Store<{getRecipeReducer: RecipeModel}>,
  ) {
    this.recipe$ = this.store.select('getRecipeReducer');
  }

  ngOnInit(): void {

    const recipe_id = this.activatedRoute.snapshot.paramMap.get('id');

    if(recipe_id){
      this.recipeService.getRecipe(recipe_id);
    }
  }

}
