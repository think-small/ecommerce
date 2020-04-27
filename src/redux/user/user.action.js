import { userActionTypes } from "./user.action.types";

export const setCurrentUserActionCreator = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
