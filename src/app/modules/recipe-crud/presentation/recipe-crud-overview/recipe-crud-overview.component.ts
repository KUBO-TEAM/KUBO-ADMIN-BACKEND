import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RecipeModel } from '../../core/domain/recipe.model';
import { RecipeService } from '../ngrx/recipe/recipe.service';
import { NotifyComponent } from '../notify/notify.component';

@Component({
  selector: 'app-recipe-crud-overview',
  templateUrl: './recipe-crud-overview.component.html',
  styleUrls: ['./recipe-crud-overview.component.sass']
})
export class RecipeCrudOverviewComponent implements OnInit {

  recipes$: Observable<Array<RecipeModel>>;

  constructor(
    private recipeService: RecipeService,
    public dialog: MatDialog,
    private store: Store<{ getAllRecipeReducer: Array<RecipeModel>}>,
  ) {
    this.recipes$ = this.store.select('getAllRecipeReducer');
  }

  ngOnInit(): void {
  }

  deleteRecipe(): void{
    this.recipeService.deleteRecipe();
  }

  notify(): void{
    this.dialog.open(NotifyComponent, {
      height: '400px',
      width: '600px',
    });
  }
}
