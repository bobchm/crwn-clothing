import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ item }) => {
    const { name, imageUrl, quantity, price } = item;
    const { addItemToCart, removeItemFromCart, removeAllOfItemFromCart } =
        useContext(CartContext);

    const incrementItem = () => addItemToCart(item);
    const decrementItem = () => removeItemFromCart(item);
    const deleteItem = () => removeAllOfItemFromCart(item);

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