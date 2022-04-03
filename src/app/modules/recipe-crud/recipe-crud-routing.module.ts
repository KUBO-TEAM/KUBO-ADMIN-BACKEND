import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropImageComponent } from './presentation/crop-image/crop-image.component';
import { RecipeCrudOverviewComponent } from './presentation/recipe-crud-overview/recipe-crud-overview.component';
import { RecipeAddComponent } from './presentation/recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from './presentation/recipe-update/recipe-update.component';
import { AuthGuard } from '../shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'overview',
    component: RecipeCrudOverviewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'overview/add',
    component: RecipeAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'overview/add/crop-image',
    component: CropImageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'overview/update/:id',
    component: RecipeUpdateComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', })],
  exports: [RouterModule]
})

export class RecipeCrudRoutingModule { }
