import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { AiModelComponent } from './presentation/ai-model/ai-model.component';

const routes: Routes = [
  {
    path: 'admin/ai-model',
    component: AiModelComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', })],
  exports: [RouterModule]
})

export class AIModelRoutingModule { }
