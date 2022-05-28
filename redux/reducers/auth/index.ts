import { createAction, handleActions } from "redux-actions";

const SET_TOKEN = "app/user/SET_TOKEN";
const CLEAR_TOKEN = "app/user/CLEAR_TOKEN";

export const setToken = createAction(SET_TOKEN);
export const clearToken = createAction(CLEAR_TOKEN);

export interface User {
  token: null | string;
}

const initialState: User = {
  token: null,
};

const auth: any = handleActions(
  {
    [SET_TOKEN]: (state: User, { payload }: { payload: string }) => ({
      ...state,
      token: payload,
    }),
    [CLEAR_TOKEN]: () => initialState,
  },
  initialState
);

export default auth;
