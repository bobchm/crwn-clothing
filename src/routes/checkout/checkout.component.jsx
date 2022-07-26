import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";
import "./checkout.styles.scss";

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);

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
            <PaymentForm />
        </div>
    );
};

export default Checkout;
