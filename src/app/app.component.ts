import { Component, OnInit } from '@angular/core';
import { RecipeService } from './modules/recipe-crud/presentation/ngrx/recipe/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  constructor(
    private recipeService: RecipeService,
  ){}
  ngOnInit(): void {
    this.recipeService.getAllRecipe();
  }
  title = 'kubo-api';
}
