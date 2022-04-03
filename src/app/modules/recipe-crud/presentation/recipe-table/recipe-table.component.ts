import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
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
export class RecipeTableComponent implements AfterViewInit, OnInit {


  @Input('recipes') recipes : Array<RecipeModel>  = [];

  dataSource : MatTableDataSource<RecipeModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(
  ){
    this.dataSource = new MatTableDataSource();
  }
  ngOnInit(): void {
    this.dataSource.data = this.recipes
  }

  ngAfterViewInit(): void {
    if(this.paginator ){
      this.dataSource.paginator = this.paginator;
    }

    if(this.sort){
      this.dataSource.sort = this.sort;
    }
  }

  overviewTableColumns: string[] = ['select', 'name', 'description', 'reference', 'ingredients', 'action'];

}

