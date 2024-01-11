import React, { createContext, useState } from 'react'
import { Products } from '../Context/Shop_Context'
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

    const addTocart = (itemID) => {
        setCartItems((prev) => ({ ...prev, itemID: prev[itemID] + 1 }))
    }

    const removefromcart = (itemID) => {
        setCartItems((prev) => ({ ...prev, itemID: prev[itemID] - 1 }))
    }

    const contextvalue = { cartItems, addTocart, removefromcart };
    return (
        <ShopContext.Provider>{props.children}</ShopContext.Provider>
    )
}
