import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/services/auth.guard';
import { FeedbackListPageComponent } from './presentation/feedback-list-page/feedback-list-page.component';

const routes: Routes = [
  {
    path: 'admin/feedbacks',
    component: FeedbackListPageComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', })],
  exports: [RouterModule]
})

export class FeedbacksRoutingModule { }
