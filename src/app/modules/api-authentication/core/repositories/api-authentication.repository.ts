import { Observable } from "rxjs";
import { LoginUserModel } from "../domain/login-user.model";

export abstract class ApiAuthenticationRepository{
  abstract loginUser(param : {email: string, password: string}) : Observable<LoginUserModel>;
}
