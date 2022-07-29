import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
    const toggleCart = () => setIsCartOpen(!isCartOpen);
    const totalCartItems = () => {
        var total = 0;
        cartItems.map((item) => (total += item.quantity));
        return total;
    };
    return (
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" onClick={toggleCart} />
            <span className="item-count" onClick={toggleCart}>
                {totalCartItems()}
            </span>
        </div>
    );
};

export default CartIcon;
