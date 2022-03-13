import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCrudRoutingModule } from './recipe-crud-routing.module';
import { RecipeCrudOverviewComponent } from './components/recipe-crud-overview/recipe-crud-overview.component';
import { SharedModule } from '../shared/shared.module';
import { RecipeTableComponent } from './components/recipe-table/recipe-table.component';
import { MatTableModule } from '@angular/material/table';
import { RecipeInfoComponent } from './components/recipe-info/recipe-info.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CropImageComponent } from './components/crop-image/crop-image.component';
import { StoreModule } from '@ngrx/store';
import { cropImageReducer } from './states/crop_image_state/crop_image.reducer';
import { MatIconModule } from '@angular/material/icon';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from './components/recipe-update/recipe-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const reducer:object = {
  cropImageReducer: cropImageReducer,
};

@NgModule({
  declarations: [
    RecipeCrudOverviewComponent,
    RecipeTableComponent,
    RecipeInfoComponent,
    CropImageComponent,
    RecipeAddComponent,
    RecipeUpdateComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RecipeCrudRoutingModule,
    MatTableModule,
    ImageCropperModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
  ]
})
export class RecipeCrudModule { }
