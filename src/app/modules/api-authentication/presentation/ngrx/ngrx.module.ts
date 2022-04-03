import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loginUserReducer } from './login-user/login-user-reducer';
import { StoreModule } from '@ngrx/store';
import { ApiAuthenticationRepository } from '../../core/repositories/api-authentication.repository';
import { ApiAuthenticationMockRepositoryImpl } from '../../data/api-authentication-mock-repository/api-authentication-mock-repository-impl';
import { ApiAuthenticationRepositoryImpl } from '../../data/api-authentication-repository/api-authentication-repository-impl';



const reducer:object = {
  loginReducer: loginUserReducer,
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducer),
  ],
  providers: [
    { provide: ApiAuthenticationRepository, useClass: ApiAuthenticationRepositoryImpl }
  ]
})
export class NgrxModule { }
