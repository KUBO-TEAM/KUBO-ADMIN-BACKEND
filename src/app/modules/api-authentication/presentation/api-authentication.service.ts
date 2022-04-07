import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { LoginUserUsecase } from '../core/usecases/login-user.usecase';

import decode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthenticationService {

  constructor(
    private loginUserUseCase : LoginUserUsecase,
    private snackBarService: SnackbarService,
    private router: Router,
  ) { }

  /** Chech is user is authenticated */
  isAuthenticated(): boolean {
    const userToken = localStorage.getItem('userToken');
    if(userToken){
      return true;
    }else{
      return false;
    }
  }

  /** Get user token */
  userToken() : string | null {
    return localStorage.getItem('userToken');
  }

  /** Login User */
  loginUser(params: {email: string, password: string}) : void{
    this.loginUserUseCase.execute(params).subscribe({
      next: (v) => {
        localStorage.setItem('userToken', v.token)
        this.router.navigate(['/overview']);
        this.snackBarService.openDuratedSnackBar(v.message);
      },
      error : (e) => this.snackBarService.openDuratedSnackBar(e.error.message),
    });
  }

  /** Logout User */
  logoutUser(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/']);
  }

}
