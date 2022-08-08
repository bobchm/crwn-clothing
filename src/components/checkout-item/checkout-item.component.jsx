import { useDispatch } from "react-redux";

import {
    addItemToCart,
    removeItemFromCart,
    removeAllOfItemFromCart,
} from "../../store/cart/cart.action";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, quantity, price } = item;
    const dispatch = useDispatch();

    const incrementItem = () => dispatch(addItemToCart(item));
    const decrementItem = () => dispatch(removeItemFromCart(item));
    const deleteItem = () => dispatch(removeAllOfItemFromCart(item));

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <div className="quantity">
                <span className="arrow" onClick={decrementItem}>
                    &#10094;
                </span>
                <span className="value">{quantity}</span>
                <span className="arrow" onClick={incrementItem}>
                    &#10095;
                </span>
            </div>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={deleteItem}>
                &#10005;
            </span>
        </div>
    );
};

export default CheckoutItem;
