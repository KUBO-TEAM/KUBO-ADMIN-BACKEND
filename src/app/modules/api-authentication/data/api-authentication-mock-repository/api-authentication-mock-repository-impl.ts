import { Injectable } from "@angular/core";
import { from, map, Observable, of } from "rxjs";
import { LoginUserModel } from "../../core/domain/login-user.model";
import { ApiAuthenticationRepository } from "../../core/repositories/api-authentication.repository";
import { LoginUserMockMapper } from "./login-user-mock-mapper";

@Injectable({
  providedIn: 'root',
})
export class ApiAuthenticationMockRepositoryImpl extends ApiAuthenticationRepository{

  private loginUserMapper = new LoginUserMockMapper();

  remoteMockData = {
    message : 'Successfully Fetch',
    token : 'test',
  }


  loginUser(param: { email: string; password: string; }): Observable<LoginUserModel> {
    return of(this.remoteMockData).pipe(map(this.loginUserMapper.mapFrom));
  }


}
