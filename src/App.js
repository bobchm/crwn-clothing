import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component.jsx";
import Home from "./routes/home/home.component.jsx";
import Authentication from "./routes/authentication/authentication-component.jsx";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component.jsx";
import { GlobalStyle } from "./global.styles.js";
import { checkUserSession } from "./store/user/user.action";
import { fetchCategoriesStart } from "./store/categories/category.action";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
        dispatch(checkUserSession());
    }, []);

    return (
        <div>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path="shop/*" element={<Shop />} />
                    <Route path="auth" element={<Authentication />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
