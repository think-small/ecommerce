export const addItemToCart = (cartItems, cartItemToAdd) => {
  const foundCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (!foundCartItem) return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToAdd.id
      ? { ...cartItem, quantity: ++cartItem.quantity }
      : { ...cartItem }
  );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const foundCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (!foundCartItem) return [...cartItems];
  if (foundCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const deleteFromCart = (cartItems, cartItemToDelete) => {
  const foundCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToDelete.id
  );
  if (!foundCartItem) return [...cartItems];
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToDelete.id);
};
