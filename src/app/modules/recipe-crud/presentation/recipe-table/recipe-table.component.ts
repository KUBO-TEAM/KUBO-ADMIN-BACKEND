import { SelectionModel } from '@angular/cdk/collections';
import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RecipeModel } from '../../core/domain/recipe.model';
import { RecipeEntity } from '../../data/repository/recipe-repository/recipe-entity';
import { RecipeService } from '../ngrx/recipe/recipe.service';


/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-recipe-table',
  templateUrl: './recipe-table.component.html',
  styleUrls: ['./recipe-table.component.sass']
})
export class RecipeTableComponent implements AfterViewInit, OnChanges {


  @Input('recipes') recipes : Array<RecipeModel> | null = [];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  dataSource = new MatTableDataSource<RecipeModel>();
  selection = new SelectionModel<RecipeModel>(true, []);

  overviewTableColumns: string[] = ['select', 'name', 'description', 'reference', 'categories', 'view'];

  constructor(
    private recipeServices: RecipeService,
  ){}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.recipes){
      this.dataSource.data = this.recipes
    }
  }

  ngAfterViewInit(): void {
    if(this.paginator ){
      this.dataSource.paginator = this.paginator;
    }

    if(this.sort){
      this.dataSource.sort = this.sort;
    }
  }

  isAllSelected(){
    const numSelected = this.selection.selected.length;
    const numRow = this.dataSource.data.length;

    return numSelected == numRow;
  }

  masterToggle(){

    if(this.isAllSelected()){
      this.selection.clear();
      return;
    }

    console.log(this.dataSource.data);


    this.selection.select(...this.dataSource.data);

    this.recipeServices.updateSelectedRecipes(this.selection.selected);
  }

  toggle($event: any, row: any): void {
    if($event){
      this.selection.toggle(row);
    }
    this.recipeServices.updateSelectedRecipes(this.selection.selected);
  }

  checkboxLabel(row? : RecipeModel): string {
    if(!row){
      return `${this.isAllSelected() ? 'deselect': 'select'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select' } row ${row._id}`
  }


}

