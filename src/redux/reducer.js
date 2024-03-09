import { combineReducers } from "redux";

import productsReducer from "../features/HomePage/redux/reducer";
import cartReducer from "../features/CartPage/redux/reducer";
import wishlistReducer from '../features/WishlistPage/redux/reducer.js'


const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
})



export default rootReducer;