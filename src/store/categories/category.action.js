import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const setCategories = (cArray) => {
    return {
        type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
        payload: cArray,
    };
};
