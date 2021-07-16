import React from 'react'
import "../css/Subtotal.css"
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { getBasketTotal } from "../reducers/addRemove";
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const { basket } = useSelector(state => state.Basket);
    return (
        <div className="Subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items:) <strong>{value}</strong>
                        </p>
                            <small className="SubtotalGift">
                                <input type="checkbox" /> This order contains a Gift
                            </small>                   
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <div className="subtotalButton">
                <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
            </div>
        </div>
    )
}


export default Subtotal
