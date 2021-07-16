import React from 'react'
import "../css/Product.css"
import {useDispatch } from "react-redux";
import {ADD, REMOVE} from "../actions/index"

function Product({ id, title, image, price, rating }) {
    const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch({
            type: "add",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="Product">
            <div className="ProductInfo">
                <p>{title}</p>
            <p className="ProductPrice">
                <small>$</small>
                    <strong>{price}</strong>
            </p>
            <div className="ProductRating">
                    {
                        Array(rating).fill(0).map(() => (
                            <p class="fa fa-star"> </p>))
                }
                
                </div>
            </div>    
            <img src={image} />
            <div className="helloProduct">
                <button className="ProductButton" onClick={addToBasket}>Add to Basket</button>
            </div>
            
        </div>
    )
}

export default Product
