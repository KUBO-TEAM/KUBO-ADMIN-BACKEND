import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { LoginUserModel } from "../domain/login-user.model";
import { ApiAuthenticationRepository } from "../repositories/api-authentication.repository";

@Injectable({
  providedIn: 'root',
})
export class LoginUserUsecase implements UseCase<{email : string, password: string}, LoginUserModel>{

  constructor(private apiAuthenticationRepository: ApiAuthenticationRepository){

  }

  execute(params: { email: string; password: string; }): Observable<LoginUserModel> {
    return this.apiAuthenticationRepository.loginUser(params);
  }

}
