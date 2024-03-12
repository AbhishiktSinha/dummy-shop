import { memo, useContext } from 'react';

import AddToCartButton from '../../../components/AddToCartButton';
import ToggleWishlistButton from '../../../components/ToggleWishlistButton.jsx'
import ProductRating from './ProductRating';
import '../styles/ProductCard.css'

import { useSelector } from 'react-redux';

function ProductCard({product, clickRedirectHandler}) {

    let {id, title, price, discountPercentage, thumbnail, rating} = product;
    // TODO: add cart state dependency
    
    title = title.length < 18 ? title : title.slice(0, 16) + "..."

    const discountedPrice = Math.floor(price - ((discountPercentage / 100 ) * price));

    const count = useSelector(state => {
        if (state.cart[id]) {
            return state.cart[id].count;
        }
        else return 0;
    });    

    function onClickHandler() {
        clickRedirectHandler(id);
    }

    console.log(title,'COUNT', count);    

    // console.log('rendered:', title);

    return (
        <div
            onClick={onClickHandler} 
            className="card-container">
            
            <div className="thumbnail-image-container">
                <img src={thumbnail} alt={title} />
            </div>

            <div className="details-container">
                <h3 className="product-title">{title}</h3>
                
                <ProductRating rating={Number(rating.toFixed(1))}/>

                <div className="price-carting-row">
                    <div className="price">$<span>{discountedPrice}</span></div>
                    <AddToCartButton 
                        productId={id} 
                        productDetails={product}
                        count={count} />
                </div>
            </div>

            
            <ToggleWishlistButton 
                productId={id}
                productDetails={product}
            />

        </div>
    )

}

export default memo(ProductCard)