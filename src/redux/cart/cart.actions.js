import { cartActionTypes } from "./cart.actions.types";

export const toggleHiddenStateActionCreator = () => {
  return {
    type: cartActionTypes.TOGGLE_HIDDEN_STATE,
  };
};

export const addItemActionCreator = (item) => {
  return {
    type: cartActionTypes.ADD_ITEM,
    payload: item,
  };
};
