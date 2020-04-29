import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, curr) => {
      acc += curr.quantity;
      return acc;
    }, 0)
);

export const selectCartTotalCost = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc, curr) => {
      acc += curr.price * curr.quantity;
      return acc;
    }, 0)
);
