import React from 'react'
import "../css/CheckoutProduct.css"
import { useSelector, useDispatch} from "react-redux";

function CheckoutProduct({ id, image, title, price, rating }) {   
    const dispatch = useDispatch();
    const removeFromBasket = () => {
        dispatch({
            type: 'remove',
            id:id,
        })
    }
    return (
        <div className="CheckoutProduct">
            <img className="CheckoutProductImgae" src={image} />
            <div className="CheckoutProductInfo">
                <p className="CheckoutProductTitle">{title}</p>
                <p className="CheckoutProductPrice"><small>$</small> <strong>{price}</strong></p>
                <div className="CheckoutProductRating">
                    {
                        Array(rating).fill(0).map(() => (<p class="fa fa-star"> </p>))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
