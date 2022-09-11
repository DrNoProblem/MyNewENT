
import { createReducer, on, Action } from '@ngrx/store';
import { initialAppState, IApp } from '../app.interface';
import { login, loginSuccess, loginFail } from '../actions/app.actions';

export const userFeatureKey = 'AppState';

export const reducer = createReducer(
  initialAppState as IApp,
  on(login, (state) => ({
    ...state,
  })),
  on(loginSuccess, (state) => ({
    ...state,
    authenticationMessage: "",
  })),
  on(loginFail, (state, { message }) => ({
    ...state,
    authenticationMessage: message,
  })),
);

export function AppReducer(state: IApp| undefined, action: Action): IApp {
  return reducer(state, action) ;
}