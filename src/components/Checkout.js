import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct' 
import '../checkout.css';
import Subtotal from './Subtotal';
import CurrencyFormat from 'react-currency-format';

function Checkout() {

  const [{cart}, dispatch] = useStateValue();


  return (
    <div className="checkout">
      <div className="checkoutLeft">
    
      <img className="checkoutAd" src="https://www.evetech.co.za/repository/ProductImages/Nvidia-R6S-Promotion-Landing-Page-961px-v2_01.jpg"
       alt="add" />
       {cart?.length === 0 ?  (
      <div>
        <h2>Your Shopping Cart Is Empty</h2>
        <p>
          You Have No Items In Your Cart.
          "Add to cart" next to the items
        </p>
      </div>
    ): (
      <div>
        <h2 className="checkTitle">Your Shopping Cart</h2>
        {cart.map(item => (
          <CheckoutProduct 
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          ratings={item.ratings}

          />
        ))}
      </div>
    )}
    </div>
        {cart.length > 0 && (
          <div className="checkoutRigth">
             <Subtotal />
          </div>
        )}
    </div>
  )
}

export default Checkout
