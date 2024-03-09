import ProductCard from "../HomePage/components/ProductCard";
import Navbar from "../../components/Navbar";
import LogoComponent from "../../components/LogoComponent";
import OpenCartButton from "../../components/OpenCartButton";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import './styles/WishlistPage.css'

export default function WishlistPage() {
    const wishlist = useSelector(state => state.wishlist);
    const wishlistProductIdList = Object.keys(wishlist);

    const navigate = useNavigate();

    return (
        <div className="wishlist-container">
            <Navbar>
                <button
                    onClick={() => navigate('../home')}
                    className="go-home">
                    Go back
                </button>
                <div className="navbar-right-container">
                    <OpenCartButton />
                </div>
            </Navbar>
            <div className="wishlist-products-cards-container">
                {
                    wishlistProductIdList.map(key => {
                        const item = wishlist[key];

                        return (
                            <ProductCard product={item} key={item.title}/>
                        )
                    })
                }
                {
                    wishlistProductIdList.length == 0 && (
                        <div className="empty-wishlist-container">
                            Your wishlist is empty
                        </div>
                    )
                }
            </div>
        </div>
    )

}