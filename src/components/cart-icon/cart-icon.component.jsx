import { CartOpenContext } from "../../contexts/cart-open.context";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartOpenContext);
    return (
        <div className="cart-icon-container">
            <ShoppingIcon
                className="shopping-icon"
                onClick={() => setIsCartOpen(!isCartOpen)}
            />
            <span
                className="item-count"
                onClick={() => setIsCartOpen(!isCartOpen)}
            >
                0
            </span>
        </div>
    );
};

export default CartIcon;
