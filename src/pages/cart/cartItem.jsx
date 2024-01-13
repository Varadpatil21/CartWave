import React, { useState, useContext } from 'react'
import { ShopContext } from '../../Context/Shop_Context';

export const CartItem = ({ data }) => {
    const { id, ProductName, Price, ProductImage } = data;
    const { cartItems } = useContext(ShopContext);
    let count = cartItems[id];
    const [man, setman] = useState(count);
    return (
        <div className='cart-item'>
            <img src={ProductImage} className="cart-item-image" />
            <div className="description">
                <p>
                    {" "}
                    <b>{ProductName}</b>
                </p>
                <p>Rs.{Price}</p>
            </div>
            <div className="manualchanger">
                <button onClick={() => { if (man > 0) setman(man - 1) }}>-</button>
                <input value={man}></input>
                <button onClick={() => setman(man + 1)}>+</button>

            </div>
        </div>
    )
}
