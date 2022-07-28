import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";

// as the actual value you want to access
export const ProductsContext = createContext({
    currentProducts: null,
    setCurrentProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
    const [currentProducts, setCurrentProducts] = useState(null);
    const value = { currentProducts, setCurrentProducts };

    useEffect(() => {
        setCurrentProducts(SHOP_DATA);
    }, []);

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
