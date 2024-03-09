import { ActionTypes } from "./actions";

const { FETCH_ERROR, FETCH_REQUEST_STARTED, FETCHED_DATA, FETCHED_MORE_DATA, SET_QUERY } = ActionTypes;

const initialState = {    
    loading: false,
    data: [],
    error: '',
    query: ''
}

export default function productsReducer(state = initialState, action) {
    // console.log(state);
    const {type, payload} = action;

    switch (type) {

        case SET_QUERY :
            return {
                ...state,                
                query: payload
            }

        case FETCH_REQUEST_STARTED :
            return {
                ...state,                 
                loading: true,                
                
            };

        case FETCH_ERROR :
            return {
                ...state,                
                loading: false,
                error: payload
            };

        case FETCHED_DATA :
            return {
                ...state,                 
                loading: false,
                error: '',
                data: payload
            };

        case FETCHED_MORE_DATA :
            return {
                ...state,                 
                loading: false,
                error: '',
                data: [...state.data, ...payload]
            }
        
        default :
            return state;
    }
}