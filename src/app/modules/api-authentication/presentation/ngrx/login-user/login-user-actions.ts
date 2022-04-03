import { createAction, props } from "@ngrx/store";

export const loginInProgress = createAction('[ Login ] in progress');
export const loginSuccess = createAction('[ Login ] success', props<{email: string, password: string}>());
export const loginFail = createAction('[ Login ] fails');
