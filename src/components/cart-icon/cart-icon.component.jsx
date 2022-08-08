import { useSelector, useDispatch } from "react-redux";
import {
    selectCartItems,
    selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const toggleCart = () => dispatch(setIsCartOpen(!isCartOpen));
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
