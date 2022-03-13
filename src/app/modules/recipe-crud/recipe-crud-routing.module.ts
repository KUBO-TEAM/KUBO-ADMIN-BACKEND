import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropImageComponent } from './components/crop-image/crop-image.component';
import { RecipeInfoComponent } from './components/recipe-info/recipe-info.component';
import { RecipeCrudOverviewComponent } from './components/recipe-crud-overview/recipe-crud-overview.component';
import { RecipeAddComponent } from './components/recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from './components/recipe-update/recipe-update.component';

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
