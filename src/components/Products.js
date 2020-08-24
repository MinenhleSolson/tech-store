import React from 'react';
import '../products.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider'; 
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function Products({ id, title, price, ratings, image }) {
    const [{cart}, dispatch] = useStateValue();

    const { enqueueSnackbar }  = useSnackbar();

    function handleClickVariant(variant) {
        enqueueSnackbar('Added To Cart', { variant });
      };

    const addToCart = () => {
        //Add item to cart
        dispatch({
            type:"ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image, 
                price: price, 
                ratings: ratings,

            }
        })
    }

    return (
        <div className="products">
            <div className="productInfo">
            <p>{title}</p>
            <p className="price">
                <small>ZAR</small>
                <strong>{price}</strong>
            </p>
            <div className="ratings">
                {
                    Array(ratings)
                    .fill()
                    .map((_) => (
                        <span>⭐</span>
                    ))
                }
            </div>
            </div>
            <img src={image} alt="1" />
            <button className="addButton" onClick={() => {addToCart(); handleClickVariant('success');}}>Add To Cart<AddShoppingCartIcon /></button>
        </div>
    )
} 

export default Products  
