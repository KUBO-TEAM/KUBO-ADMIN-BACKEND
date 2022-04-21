import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiAuthenticationModule } from './modules/api-authentication/api-authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCrudModule } from './modules/recipe-crud/recipe-crud.module';
import { AiModelModule } from './modules/ai-model/ai-model.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ApiAuthenticationModule,
    RecipeCrudModule,
    AiModelModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
