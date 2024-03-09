import { useContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import CartProductCard from "./components/CartProductCard.jsx";
import CartBillItem from './components/CartBillItem.jsx'
import Navbar from '../../components/Navbar.jsx'
import OpenWishlistButton from "../../components/OpenWishlistButton.jsx";


import './styles/CartPage.css';


export default function CartPage() {

    const cart = useSelector(state => state.cart);

    console.log(cart);

    const cartProductKeys = Object.keys(cart);

    const[cost, setCost] = useState(0);
    
    const navigate = useNavigate();  
    
    useEffect( ()=> {
        
        let totalCost = 0;

        cartProductKeys.forEach(key => {
            const item = cart[key]

            totalCost += (item.details.price * ((100 - item.details.discountPercentage)/100) * item.count);
        });

        setCost(totalCost.toFixed(0));

    }, [cart]);

    return (
        <div id="cart-main">

            <Navbar>
                <button
                    onClick={()=>navigate('../home')}
                    className="go-home">
                    Shop for more
                </button>

                <h2>Your Cart</h2>

                <div className="navbar-right-container">
                    <OpenWishlistButton/>
                </div>
            </Navbar>
            
            <div className="cart-bill-container">
                {
                    cartProductKeys.length == 0 && <p className="empty-cart-placeholder">Your cart is empty</p>
                }                
                <div className="cart-products-container">

                    {
                        cartProductKeys.length > 0 && (
                            cartProductKeys.map( key => {
                                const item = cart[key];
                                return (
                                    <CartProductCard key={item.details.title} cartProduct={item}/>
                                )
                            })
                        )
                    }
                </div>

                
                {
                    cartProductKeys.length > 0 && (

                        <table className="cart-bill-table">
                            <thead className="cart-table-header">
                                <tr className="bill-item-row">
                                    <td className="item-title">Title</td>
                                    <td className="item-price">Price</td>
                                    <td className="item-discounted-price">Discounted Price</td>
                                    <td className="item-quantity">Quantity</td>
                                    <td className="item-total-price">Total Price</td>
                                </tr>
                            </thead>

                            <tbody className="cart-table-body">
                                {                                    
                                    cartProductKeys.map(key => {
                                        const item = cart[key];
                                        return <CartBillItem key={item.title} product={item} />
                                    })
                                }
                            </tbody>

                            <tfoot>
                                <tr className="bill-item-row" style={{fontWeight: '600'}} >
                                    <td colSpan={4}>   
                                        Total Payable Amount                                     
                                    </td>
                                    <td>${cost.toLocaleString()}</td>
                                </tr>
                            </tfoot>
                        </table>

                    )
                }
            </div>

        </div>
    )
}