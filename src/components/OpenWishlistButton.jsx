import { useSelector } from 'react-redux';
import 'material-symbols'
import { useNavigate } from 'react-router-dom';

export default function OpenWishlistButton() {
    const wishlist = useSelector(state => state.wishlist);

    const wishlistCount = Object.keys(wishlist).length;

    const navigate = useNavigate();
    function clickHandler() {
        navigate('../wishlist');
    }

    return (
        <div className="open-wishlist-button-container">
            <span className="wishlist-count-badge">{Boolean(wishlistCount) && wishlistCount}</span>
            <button 
                onClick={clickHandler}
                className="material-symbols-rounded">
                    favorite
            </button>
        </div>
    )
}