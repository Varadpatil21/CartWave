import React, { useContext } from 'react'
import './shop.css'
import { ShopContext } from '../../Context/Shop_Context'
export const Product = ({ data }) => {
    const { id, ProductName, Price, ProductImage } = data;
    const { addToCart } = useContext(ShopContext);
    return (
        <div key={id} className='product'>

            <img src={ProductImage} alt={ProductName} />


            <div className="des">
                <h3>{ProductName}</h3>
                <p>${Price}</p>
            </div>
            <button className="addtocart" onClick={() => addToCart()}>Add To Cart</button>

        </div>
    )
}
