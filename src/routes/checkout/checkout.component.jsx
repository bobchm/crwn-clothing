import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
    const { cartItems } = useContext(CartContext);

    const totalPrice = () => {
        var total = 0;
        cartItems.forEach((item) => (total += item.quantity * item.price));
        return total;
    };

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">Product</div>
                <div className="header-block">Description</div>
                <div className="header-block">Quantity</div>
                <div className="header-block">Price</div>
                <div className="header-block">Remove</div>
            </div>
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item} />
            ))}
            <span className="total">TOTAL: ${totalPrice()}</span>
        </div>
    );
};

export default Checkout;
