import { ActionTypes } from "./actions"; 


const {TOGGLE_WISHLIST} = ActionTypes

const initialState = {};

export default function wishlistReducer(state = initialState, action) {
    const {type, payload} = action;

    if (type == TOGGLE_WISHLIST) {

        const {productId, productDetails} = payload;

        if (state[productId]) {

            delete state[productId];
            return {...state};
        }
        else {
            return {...state, [productId]: {...productDetails} }
        }
    }
    else {
        return state;
    }
}