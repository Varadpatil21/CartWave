import React, { useContext } from 'react'
import { Products } from '../../product'
import { ShopContext } from '../../Context/Shop_Context'
import { CartItem } from './cartItem'

import { useNavigate } from "react-router-dom"
import './cartitem.css'
export const Cart = () => {
    const { cartItems, totalamount } = useContext(ShopContext);
    const navi = useNavigate();
    return (
        <div className="cart-container">
            <div>
                <h1>Cart Items</h1>
            </div>
            <div className="cart-items">
                {Products.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product} />
                    }
                })}
            </div>
            <div className="checkout">
                <h3>Total:Rs.{totalamount()}</h3>
                <button onClick={() => navi('/')}>Continue Shoppig</button>
                <button>Checkout</button>
            </div>
        </div>
    )
}
