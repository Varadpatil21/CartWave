import React, { useState, useContext } from 'react'
import { ShopContext } from '../../Context/Shop_Context';

export const CartItem = ({ data }) => {
    const { id, ProductName, Price, ProductImage } = data;
    const { cartItems, addToCart, removefromCart, updateCartItemcount } = useContext(ShopContext);
    let count = cartItems[id];
    // const [man, setman] = useState(count);
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
                <button onClick={() => removefromCart(id)}>-</button>
                <input value={cartItems[id]} onChange={(e) => { updateCartItemcount(Number(e.target.value), id) }}></input>
                <button onClick={() => addToCart(id)}>+</button>

            </div>
        </div>
    )
}
