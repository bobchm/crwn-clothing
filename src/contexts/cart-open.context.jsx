import { createContext, useState, useEffect } from "react";

// as the actual value you want to access
export const CartOpenContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => false,
});

export const CartOpenProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };

    useEffect(() => {
        setIsCartOpen(false);
    }, []);

    return (
        <CartOpenContext.Provider value={value}>
            {children}
        </CartOpenContext.Provider>
    );
};
