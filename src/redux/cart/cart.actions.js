import { cartActionTypes } from "./cart.actions.types";

export const toggleHiddenStateActionCreator = () => {
  return {
    type: cartActionTypes.TOGGLE_HIDDEN_STATE,
  };
};
