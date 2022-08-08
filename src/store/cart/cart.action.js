import { CART_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (bool) => {
    return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool };
};

export const addItemToCart = (item) => {
    return { type: CART_ACTION_TYPES.ADD_ITEM_TO_CART, payload: item };
};

export const removeItemFromCart = (item) => {
    return { type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART, payload: item };
};

export const removeAllOfItemFromCart = (item) => {
    return {
        type: CART_ACTION_TYPES.REMOVE_ALL_OF_ITEM_FROM_CART,
        payload: item,
    };
};
