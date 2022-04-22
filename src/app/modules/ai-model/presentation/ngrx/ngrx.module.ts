import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AiRepository } from '../../core/repositories/ai.repository';
import { AiRepositoryImpl } from '../../data/repository/ai-repository/ai-repository-impl';
import { detectImageReducer } from './ai/detect-image/detect-image-reducer';


const reducer:object = {
  detectImageReducer: detectImageReducer,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducer),
  ],
  providers: [
    { provide: AiRepository, useClass: AiRepositoryImpl }
  ]
})
export class NgrxModule { }
