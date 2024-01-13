import React, { createContext, useState } from 'react'
import { Products } from '../../src/product'
export const ShopContext = createContext(null);
const defaultCart = () => {
    let cart = {};
    for (let i = 1; i <= Products.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const Shop_Context = (props) => {
    const [cartItems, setCartItems] = useState(defaultCart());

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }))
    }

    const removefromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }))
    }

    const contextvalue = { cartItems, addToCart, removefromCart };
    return (
        <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>
    )
}
