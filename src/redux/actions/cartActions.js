import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./actionTypes";

export const addToCart = (productId)=>{
    return {
        type: ADD_TO_CART,
        payload: productId,
    }
}

export const incrementQuantity = (productId)=> {
    return {
        type: INCREMENT_QUANTITY,
        payload: productId
    }
}

export const decrementQuantity = (productId)=>{ 
    return {
        type: DECREMENT_QUANTITY,
        payload: productId
    }
}