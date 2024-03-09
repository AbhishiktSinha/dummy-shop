import AddToCartButton from '../../../components/AddToCartButton';
import '../styles/CartProductCard.css';
import ToggleWishlistButton from '../../../components/ToggleWishlistButton';

export default function CartProductCard({cartProduct}) {

    console.log('cart product:', cartProduct);
    
    const {count, details: product} = cartProduct;

    const {id, title, thumbnail, price, discountPercentage} = product;

    const discountedPrice = Math.floor(price - (discountPercentage * price / 100));
    
    const totalPrice = (discountedPrice * count);

    const displayTitle = title.length <= 18 ? title : title.slice(0, 15) + "...";

    return (
        <div className="cart-card-container">
            <div className="thumbnail-image-container">
                <img src={thumbnail} alt={title} />
            </div>

            <div className="details-container">
                <h3 className="product-title">{displayTitle}</h3>                            

                <div className="price-carting-row">
                    <div className="price">Price: $<span>{discountedPrice.toFixed(0)}</span></div>
                    <div className="total-price">Total: $<span>{totalPrice}</span></div>
                </div>
                <AddToCartButton productId={id} productDetails={product} count={count} />
            </div>

            <ToggleWishlistButton productId={id} productDetails={product} />

        </div>
    )
}