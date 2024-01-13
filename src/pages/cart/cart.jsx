import React, { useContext } from 'react'
import { Products } from '../../product'
import { ShopContext } from '../../Context/Shop_Context'
import { CartItem } from './cartItem'

import './cartitem.css'
export const Cart = () => {
    const { cartItems } = useContext(ShopContext);
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
        </div>
    )
}
