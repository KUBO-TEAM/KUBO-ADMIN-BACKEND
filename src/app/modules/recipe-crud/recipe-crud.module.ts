import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationModule } from './presentation/presentation.module';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { cropImageReducer } from './states/crop_image_state/crop_image.reducer';
import { RecipeCrudRoutingModule } from './recipe-crud-routing.module';
import { RecipeRepository } from './core/repositories/recipe.repository';
import { RecipeMockRepositoryImpl } from './data/repository/recipe-mock-repository/recipe-mock-repository';
import { RecipeRepositoryImpl } from './data/repository/recipe-repository/recipe-repository-impl';

const reducer:object = {
  cropImageReducer: cropImageReducer,
};



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PresentationModule,
    RecipeCrudRoutingModule,
    DataModule,
    CoreModule,
    StoreModule.forRoot(reducer),
  ],
  providers: [
    { provide: RecipeRepository, useClass: RecipeRepositoryImpl }
  ]
})
export class RecipeCrudModule { }
