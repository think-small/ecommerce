import { userActionTypes } from "./user.actions.types";

export const setCurrentUserActionCreator = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
