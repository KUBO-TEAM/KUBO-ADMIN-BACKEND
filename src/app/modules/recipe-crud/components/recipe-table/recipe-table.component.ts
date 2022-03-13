import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from '../../models/recipe.model';


const RECIPE_EXAMPLE_DATA: Recipe[] = [
  {name : 'test', description: 'test', reference: 'test', ingredients: ['test']},
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.sass']
})
export class RecipeTableComponent {

  constructor(
    private readonly router: Router
  ){}

  overviewTableColumns: string[] = ['name', 'description', 'reference', 'ingredients'];
  recipeDataSource = RECIPE_EXAMPLE_DATA;
}
