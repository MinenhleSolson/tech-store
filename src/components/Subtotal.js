import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import '../checkout.css'
import {getCartTotal} from '../reducer'


function Subtotal() {

    const [{cart}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            

            <CurrencyFormat 

            renderText={(value) => (
                <p>
                    Subtotal ({cart.length} items): <strong>{`${value}`}</strong>
                </p>
            )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"ZAR"}
            />

            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal
