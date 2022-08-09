import { CART_ACTION_TYPES } from "./cart.types";

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const decrementCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToRemove.id
                ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 0) }
                : cartItem
        );
    }

    return [...cartItems];
};

const removeAllOfCartItem = (cartItems, productToRemove) => {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };
        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            console.log(state);
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, payload),
            };
        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: decrementCartItem(state.cartItems, payload),
            };
        case CART_ACTION_TYPES.REMOVE_ALL_OF_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeAllOfCartItem(state.cartItems, payload),
            };
        default:
            return state;
    }
};
