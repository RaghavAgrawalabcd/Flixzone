import React from 'react'
import "../css/Checkout.css"
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct"
import { useSelector} from "react-redux";
function Checkout() {
    const { basket} = useSelector(state => state.Basket);
    return (
        <div className="Checkout">
            <div className="CheckoutLeft">
                <img className="CheckoutAdd" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/Lenovo/AMZ-Banner-1500x300-8.jpg" alt=""/>
                
                <div >
                    <h2 className="checkoutTitle">Your shoppig Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="CheckoutRight">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

