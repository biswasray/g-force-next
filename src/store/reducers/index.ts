import { combineReducers } from "redux";
import { authSlice } from "./authSlice";
import { RESET_STATE } from "../actions";
import { loaderSlice } from "./loaderSlice";
import { progressCounterSlice } from "./progressCounter";
import { api } from "../services/generated";

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [loaderSlice.name]: loaderSlice.reducer,
  [progressCounterSlice.name]: progressCounterSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const defaultInitialState = {
  [authSlice.name]: authSlice.getInitialState(),
  [loaderSlice.name]: loaderSlice.getInitialState(),
  [progressCounterSlice.name]: progressCounterSlice.getInitialState(),
};

export type RootState = ReturnType<typeof rootReducer>;

export const appReducer: typeof rootReducer = (state, action) => {
  // Reset redux state
  if (action.type === RESET_STATE) {
    state = defaultInitialState;
  }
  return rootReducer(state, action);
};

export * from "../actions";
export * from "./authSlice";
export * from "./loaderSlice";
export * from "./progressCounter";
