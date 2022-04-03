import { createReducer, on } from "@ngrx/store"
import { loginFail, loginInProgress, loginSuccess } from "./login-user-actions";

export enum LoginUserState {
  initial,
  inProgress,
  success,
  fail,
}

const LOGIN_USER_INITIAL_STATE : { status: LoginUserState, token?: string} = {
  status: LoginUserState.initial,
}

const LOGIN_USER_REDUCER = createReducer(
  LOGIN_USER_INITIAL_STATE,
  on(loginInProgress,(state) => ({status : LoginUserState.inProgress})),
  on(loginSuccess,(state) => ({status : LoginUserState.success, token: state.token})),
  on(loginFail,(state) => ({status : LoginUserState.inProgress})),
);

export function loginUserReducer (state: any, action: any){
  return LOGIN_USER_REDUCER(state, action);
}
