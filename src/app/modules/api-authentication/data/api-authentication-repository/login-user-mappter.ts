import { Mapper } from "../../core/base/mapper";
import { LoginUserModel } from "../../core/domain/login-user.model";
import { LoginUserEntity } from "./login-user-entity";

export class LoginUserMapper extends Mapper<LoginUserEntity, LoginUserModel>{
  mapFrom(param: LoginUserEntity): LoginUserModel {
    return {
      message : param.message,
      token: param.token,
    }
  }
  mapTo(param: LoginUserModel): LoginUserEntity {
    return {
      message : param.message,
      token: param.token,
    }
  }

}
