import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import 'material-symbols';

export default function OpenCartButton() {

    const cart = useSelector(state => state.cart)

    console.log('CART STATE: ',cart);
    
    const [cartDetails, setCartDetails] = useState({
        count: 0,
        cost: 0
    })

    const {count, cost} = cartDetails;

    const navigate = useNavigate();

    useEffect( ()=> {
        
        let totalCost = 0;
        let totalCount = 0;

        if (!cart) return;

        const cartKeys = Object.keys(cart);

        cartKeys.forEach(key => {
            const item = cart[key];
            totalCost += Math.floor(item.details.price * ((100 - item.details.discountPercentage)/100) * item.count);
            totalCount += item.count;
        });

        setCartDetails({
            count: totalCount,
            cost: totalCost
        });

    }, [cart]);


    return (

        <button className="open-cart-button" onClick={()=>navigate('../cart')}>
            <span className="material-symbols-rounded">shopping_cart</span>

            {
                cost == 0 ? (
                    <span>Cart is empty</span>
                ) : 
                (
                    <div className="cart-details">
                        <p>{count} {`item` + (count > 1 ? 's' : '')}</p>
                        <p>${cost.toLocaleString()}</p>
                    </div>
                )
            }

        </button>
    )
}