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
    const updateCartItemcount = (itemID, newAmnt) => {
        setCartItems((prev) => ({ ...prev, [itemID]: newAmnt }))

    }
    const totalamount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let info = Products.find((product) => product.id === Number(item));
                total += cartItems[item] * info.Price;
            }
        }
        return total;
    }

    const contextvalue = { cartItems, addToCart, removefromCart, updateCartItemcount, totalamount };
    return (
        <ShopContext.Provider value={contextvalue}>{props.children}</ShopContext.Provider>
    )
}
