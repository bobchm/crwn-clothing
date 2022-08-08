import "./cart-dropdown.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
            <Button
                onClick={() => {
                    dispatch(setIsCartOpen(false));
                    navigate("/checkout");
                }}
            >
                GO TO CHECKOUT
            </Button>
        </div>
    );
};

export default CartDropdown;
