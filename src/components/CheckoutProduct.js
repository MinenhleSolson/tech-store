import React from 'react';
import Checkout from './Checkout';
import '../checkout.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id ,title, image, price, ratings}) {

    const [{cart}, dispatch] = useStateValue();

    const RemoveFromCart = () => {
        dispatch({
            type:"REMOVE_FROM_CART",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="l" />

            <div className="checkoutProduct_info" >

            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduc_price">
                <small>ZAR</small>
                <strong>{price}</strong>
            </p>
            <div className="checkout_ratings">
                {
                    Array(ratings)
                    .fill()
                    .map((_) => (
                        <span>⭐</span>
                    ))
                }
            </div>
            <button className="RemoveFromCart" onClick={RemoveFromCart} >Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
