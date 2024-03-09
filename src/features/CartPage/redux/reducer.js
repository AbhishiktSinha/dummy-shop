import { ActionTypes } from "./actions";

const {ADD_TO_CART, INCREMENT_COUNT, DECREMENT_COUNT} = ActionTypes;

const initialState = {

    /*cartProducts: {
        
        id: {
            count: xxx,
            details: {
                title,
                id,
                description,
                thumbnail,
                images,
                rating
            }
        }
    }*/
}

export default function cartReducer(state = initialState, action) {
    const {type, payload} = action;    

    if (payload) {

        const {productId, details} = payload;
        
        switch(type) {
    
            case ADD_TO_CART :
                return {
                    ...state, 
                    [productId]: {
                        count: 1, 
                        details: payload.details,
                    }
                }
    
            case INCREMENT_COUNT :
                return {
                    ...state, 
                    [productId]: {
                        ...state[productId],
                        count: state[productId].count + 1,
                    }
                }
    
            case DECREMENT_COUNT :
                console.log('decrementing count of :', state[productId]);
                if (state[productId].count == 1) {
                    delete state[productId];
                    return {
                        ...state,                    
                    }
                }
                else {
                    return {
                        ...state,
                        [productId]: {
                            ...state[productId],
                            count: state[productId].count -1,
                        }
                    }
                }
    
            default :
                return state;
        }
    }
    else {
        return state;
    }

}