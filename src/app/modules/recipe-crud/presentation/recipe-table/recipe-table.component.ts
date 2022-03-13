import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
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


  @Input('recipesData') recipesData : RecipeEntity[] = [];

  constructor(
    private readonly router: Router
  ){}

  overviewTableColumns: string[] = ['_id', 'name', 'description', 'reference', 'ingredients'];
}

