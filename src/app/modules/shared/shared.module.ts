import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './components/container/container.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import { TypeofPipe } from './pipes/typeof.pipe';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    ContainerComponent,
    TypeofPipe,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    ContainerComponent,
    TypeofPipe
  ]
})
export class SharedModule { }
