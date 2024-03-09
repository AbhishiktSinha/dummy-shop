import { useContext } from "react";
// import cartContext from "../context/cartContext";
import { useSelector, useDispatch } from "react-redux";
import {ActionTypes} from '../features/CartPage/redux/actions.js'

import '../styles/AddToCartButton.css'

const {ADD_TO_CART, INCREMENT_COUNT, DECREMENT_COUNT} = ActionTypes;


export default function AddToCartButton({productId, productDetails, count}) {

    // const{addProduct, incrementProductCount, decrementProductCount, getProductCount} = useContext(cartContext);

    /* context api made the application state globally available, 
        and also provided functions to modify the application state globally

        the same is now handled by redux state and reducer  functions which are accessed using dispatch
        in other words to modify the application now, we have to just dispatch actions        
    */
    const dispatch = useDispatch();

    function addToCartHandler() {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                productId: productId,
                details: productDetails,
            }
        })
    }

    function incrementCountHandler() {
        dispatch({
            type: INCREMENT_COUNT,
            payload: {
                productId: productId
            }
        })
    }

    function decrementCountHandler() {
        dispatch({
            type: DECREMENT_COUNT,
            payload: {
                productId: productId
            }
        })
    }

    

    return (
        <>
            {
                (count > 0) ? (
                    <div className="add-remove-item-container">
                        <button 
                            onClick={(e)=> {
                                e.stopPropagation();
                                decrementCountHandler()
                            }} 
                            className="decrease-count-btn">
                                -
                        </button>
                            {count}
                        <button 
                            onClick={(e)=> {
                                e.stopPropagation();
                                incrementCountHandler();
                            }}
                            className="increase-count-btn">
                                +
                        </button>
                    </div>
                ) : 
                (
                    <button 
                        onClick={(e)=> {
                            e.stopPropagation();
                            addToCartHandler();
                        }}
                        className="add-to-cart-btn">
                            Add
                    </button>
                )
            }
        </>
    )
}