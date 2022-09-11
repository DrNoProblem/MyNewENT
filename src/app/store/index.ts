import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { IAppState } from './app.interface';
import { AppReducer } from './reducers/app.reducers';

export const reducers: ActionReducerMap<IAppState> = {
    AppState: AppReducer
  };
  export const metaReducers: MetaReducer<IAppState>[] = [];