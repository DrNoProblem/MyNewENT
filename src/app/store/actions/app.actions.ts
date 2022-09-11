
import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[loginModule] log user Action',
  props<{ usernamae: string; password: string }>()
);

export const loginSuccess = createAction(
  '[loginModule] log user Success Action'
);

export const loginFail = createAction(
  '[loginModule] log user Fail Action',
  props<{ message: string }>()
);