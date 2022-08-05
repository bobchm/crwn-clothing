import { createContext, useReducer } from "react";

// as the actual value you want to access
export const CartContext = createContext({
    isCartOpen: false,
    cartItems: [],
    setIsCartOpen: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeAllOfItemFromCart: () => {},
});

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

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    REMOVE_ITEM_FROM_CART: "REMOVE_ITEM_FROM_CART",
    REMOVE_ALL_OF_ITEM_FROM_CART: "REMOVE_ALL_OF_ITEM_FROM_CART",
};

const cartReducer = (state, action) => {
    const { type, payload } = action;
    const { cartItems } = state;
    console.log(state);
    console.log(payload);

    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };

        case CART_ACTION_TYPES.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addCartItem(cartItems, payload),
            };

        case CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: decrementCartItem(cartItems, payload),
            };

        case CART_ACTION_TYPES.REMOVE_ALL_OF_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeAllOfCartItem(cartItems, payload),
            };

        default:
            throw new Error(`Unhandled type ${type} in cartReducer`);
    }
};

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
};

export const CartProvider = ({ children }) => {
    const [{ isCartOpen, cartItems }, dispatch] = useReducer(
        cartReducer,
        INITIAL_STATE
    );
    const setIsCartOpen = (val) => {
        dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: val });
    };
    const addItemToCart = (productToAdd) => {
        dispatch({
            type: CART_ACTION_TYPES.ADD_ITEM_TO_CART,
            payload: productToAdd,
        });
    };
    const removeItemFromCart = (productToRemove) => {
        dispatch({
            type: CART_ACTION_TYPES.REMOVE_ITEM_FROM_CART,
            payload: productToRemove,
        });
    };
    const removeAllOfItemFromCart = (productToRemove) => {
        dispatch({
            type: CART_ACTION_TYPES.REMOVE_ALL_OF_ITEM_FROM_CART,
            payload: productToRemove,
        });
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        removeItemFromCart,
        removeAllOfItemFromCart,
    };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};
