import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropImageComponent } from './presentation/crop-image/crop-image.component';
import { RecipeCrudOverviewComponent } from './presentation/recipe-crud-overview/recipe-crud-overview.component';
import { RecipeAddComponent } from './presentation/recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from './presentation/recipe-update/recipe-update.component';

const routes: Routes = [
  {path: 'overview', component: RecipeCrudOverviewComponent},
  {path: 'overview/add', component: RecipeAddComponent},
  {path: 'overview/add/crop-image', component: CropImageComponent},

  {path: 'overview/update', component: RecipeUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RecipeCrudRoutingModule { }
