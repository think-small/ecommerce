import { cartActionTypes } from "./cart.actions.types";
import {
  addItemToCart,
  removeItemFromCart,
  deleteFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_HIDDEN_STATE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case cartActionTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToCart(state.items, action.payload),
      };
    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromCart(state.items, action.payload),
      };
    case cartActionTypes.DELETE_FROM_CART:
      return {
        ...state,
        items: deleteFromCart(state.items, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
