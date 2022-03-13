import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../../core/domain/recipe.model';
import { GetAllRecipesUsecase } from '../../core/usecases/get-all-recipes.usecase';

@Component({
  selector: 'app-recipe-crud-overview',
  templateUrl: './recipe-crud-overview.component.html',
  styleUrls: ['./recipe-crud-overview.component.sass']
})
export class RecipeCrudOverviewComponent implements OnInit {

  recipes: Array<RecipeModel> = [];

  constructor(private getAllRecipes: GetAllRecipesUsecase) { }

  ngOnInit(): void {
    this.updateRecipes();
  }

  updateRecipes(){
    this.getAllRecipes.execute().subscribe((value: RecipeModel)=>{
      console.log(value);

      this.recipes.push(value);
    });
  }
}
