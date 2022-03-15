import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ApiAuthenticationModule } from './modules/api-authentication/api-authentication.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeCrudModule } from './modules/recipe-crud/recipe-crud.module';
import { DevSidenavComponent } from './dev/components/dev-sidenav/dev-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    DevSidenavComponent,
  ],
  imports: [
    BrowserModule,
    ApiAuthenticationModule,
    RecipeCrudModule,
    RouterModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
