
export default function CartBillItem({product}) {
    
    const {count, details : {title, price, discountPercentage } } = product;
    const discountedPrice = Math.floor(price * (100 - discountPercentage)/100);
    const totalPrice = discountedPrice * count;

    return (
        <tr className="bill-item-row">
            <td className="item-title">{title}</td>
            <td className="item-price">${price.toLocaleString()}</td>
            <td className="item-discounted-price">${discountedPrice.toLocaleString()}</td>
            <td className="quantity">{count}</td>
            <td className="item-total-price">${totalPrice.toLocaleString()}</td>
        </tr>
    )
}