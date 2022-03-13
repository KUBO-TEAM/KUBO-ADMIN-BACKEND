import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RecipeModel } from '../../core/domain/recipe.model';
import { RecipeEntity } from '../../data/repository/recipe-repository/recipe-entity';


/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.sass']
})
export class RecipeTableComponent {


  @Input('recipes') recipes : Array<RecipeModel>  = [];

  constructor(
  ){}

  overviewTableColumns: string[] = ['_id', 'name', 'description', 'reference', 'ingredients'];

}

