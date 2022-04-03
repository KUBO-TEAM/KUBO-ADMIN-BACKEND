import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { LoginUserModel } from "../../core/domain/login-user.model";
import { ApiAuthenticationRepository } from "../../core/repositories/api-authentication.repository";
import { LoginUserMockMapper } from "../api-authentication-mock-repository/login-user-mock-mapper";
import { LoginUserEntity } from "./login-user-entity";
import { LoginUserMapper } from "./login-user-mappter";

@Injectable({
  providedIn: 'root',
})
export class ApiAuthenticationRepositoryImpl extends ApiAuthenticationRepository{

  loginUserMapper = new LoginUserMapper();

  constructor(
    private http: HttpClient
  ){
    super();
  }

  loginUser(param: { email: string; password: string; }): Observable<LoginUserModel> {
    return this.http.post<LoginUserEntity>(environment.url + "api/login", param).pipe(map(this.loginUserMapper.mapFrom));
  }

}
