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

export const removeItemActionCreator = (item) => {
  return {
    type: cartActionTypes.REMOVE_ITEM,
    payload: item,
  };
};

export const deleteFromCartActionCreator = (item) => {
  return {
    type: cartActionTypes.DELETE_FROM_CART,
    payload: item,
  };
};
