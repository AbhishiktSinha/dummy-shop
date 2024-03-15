import { useSelector, useDispatch } from "react-redux";
import { ActionTypes } from "../features/WishlistPage/redux/actions";
import 'material-symbols'

const {TOGGLE_WISHLIST} = ActionTypes;
export default function ToggleWishlistButton({productId, productDetails}) {

    const dispatch = useDispatch();
    const isWishListed = useSelector(state => Boolean(state.wishlist[productId]));

    // console.log(productId,'is wishlisted?', isWishListed);

    function clickHanlder(e) {
        e.stopPropagation();

        dispatch({
            type: TOGGLE_WISHLIST,
            payload : {
                productId: productId,
                productDetails: productDetails,
            }
        })
    }

    return (
        <button
            onClick={clickHanlder}
            className={`wishlist-button material-symbols-outlined ${isWishListed && 'wishlisted'}`}>
            favorite
        </button>
    )
}