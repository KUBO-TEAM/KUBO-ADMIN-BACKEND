import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InputComponent } from './components/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './components/container/container.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FloatingButtonComponent } from './components/floating-button/floating-button.component';
import {MatIconModule} from '@angular/material/icon';
import { TypeofPipe } from './pipes/typeof.pipe';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    ContainerComponent,
    CheckboxComponent,
    FloatingButtonComponent,
    TypeofPipe
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
  ],
  exports: [
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    ContainerComponent,
    CheckboxComponent,
    FloatingButtonComponent,
    TypeofPipe
  ]
})
export class SharedModule { }
