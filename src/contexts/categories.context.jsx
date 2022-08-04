import { createContext, useEffect, useReducer } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
    SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const categoriesReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            return {
                ...state,
                categoriesMap: payload,
            };
        default:
            throw new Error(`Unhandled type ${type}`);
    }
};

const INITAL_STATE = {
    categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
    const [{ categoriesMap }, dispatch] = useReducer(
        categoriesReducer,
        INITAL_STATE
    );

    const setCategoriesMap = (cmap) => {
        dispatch({
            type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
            payload: cmap,
        });
    };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        };
        getCategoriesMap();
    }, []);

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};
