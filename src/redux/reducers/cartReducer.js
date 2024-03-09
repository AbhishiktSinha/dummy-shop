import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "../actions/actionTypes";
import { getProductById } from "../../data";

const initialState = {
    cartProducts:[],
    cartPrice: 0,
}

export default function (state = initialState, action) {
    const productId = action.payload

    switch(action.type) {

        case ADD_TO_CART :
            const selectedProduct1 = getProductById(productId);
            return {
                ...state, 
                
                cartProducts: [...cartProducts, {
                    ...selectedProduct1,
                    count: 1
                }],

                cartPrice : cartCost + selectedProduct1.discountedPrice

            }
            
            
        
        case INCREMENT_QUANTITY :            
            let costIncrement = 0;

            return {
                ...state, 

                cartProducts : cartProducts.map(product => {

                    if (product.id == productId) {
                        costIncrement  = product.discountedPrice;

                        return {
                            ...product, 
                            count: product.count + 1
                        }
                    }
                    else {
                        return product
                    }
                }),

                cartPrice : cartPrice + costIncrement,
            }


        
        case DECREMENT_QUANTITY :
            const selectedProduct = cartProducts.find( item => item.id == productId);
            let costDecrement = selectedProduct.discountedPrice;
            
            // if removing item
            if (selectedProduct.count == 1) {

                return {
                    ...state, 

                    cartProducts : cartProducts.filter( item => item !== selectedProduct),

                    cartPrice: cartPrice - costDecrement,
                }
            }
            // if just decrementing quantity
            else {

                return {
                    ...state,
                    cartProducts : cartProducts.map( item => {
    
                        if (item === selectedProduct) {
                            return {
                                ...item, 
                                count : item.count - 1
                            };
                        }
                        else {
                            return item;
                        }
                    }), 

                    cartPrice : cartPrice - costDecrement,
                }

            }

            break;
        

            
        default : 
            return state;

    }

}