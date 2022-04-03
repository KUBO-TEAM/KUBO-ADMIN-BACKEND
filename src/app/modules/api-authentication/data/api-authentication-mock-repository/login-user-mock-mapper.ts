import { Mapper } from "../../core/base/mapper";
import { LoginUserModel } from "../../core/domain/login-user.model";
import { LoginMockEntity } from "./login-user-mock-entity";

export class LoginUserMockMapper extends Mapper<LoginMockEntity, LoginUserModel>{

  mapFrom(param: LoginMockEntity): LoginUserModel {
    return {
      message: param.message,
      token: param.token,
    }
  }
  mapTo(param: LoginUserModel): LoginMockEntity {
    return {
      message: param.message,
      token: param.token,
    }
  }

}
