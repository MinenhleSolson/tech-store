export const initialState = {
    cart: []
}

export const getCartTotal = (cart) => 
    cart?.reduce((amount, item) => item.price + amount, 0)


function reducer(state, action) {
    console.log(action)
    switch(action.type) {
        case 'ADD_TO_CART':
            //Logic for adding item to cart
            return {
                ...state,
                cart: [...state.cart, action.item ],
            }
        case 'REMOVE_FROM_CART':
            //logic for REmoving item  
            let newCart = [...state.cart];
            //going to check if the cart id is equal to action id
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id );

            if(index >= 0){
                //item exists in cart must be removed..
                newCart.splice(index, 1);
            }else{
                console.warn(
                    `Cant remove product(id: ${action.id} as is not in cart)`
                )

            }
            
           return {...state,
             cart: newCart,}
           default:
               return state;
    
    }
    
}

export default reducer