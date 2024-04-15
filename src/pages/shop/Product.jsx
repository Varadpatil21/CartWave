import React, { useContext, useState } from 'react';
import './shop.css';
import { ShopContext } from '../../Context/Shop_Context';

export const Product = ({ data }) => {
    const { id, ProductName, Price, ProductImage, Description, Configuration, ExpectedDelivery, ModesOfPayment, Warranty, OwnerCompany } = data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const [showDetail, setShowDetail] = useState(false); // State to control the visibility of the detail popup

    const toggleDetail = () => {
        setShowDetail(!showDetail);
    };

    const closePopup = () => {
        setShowDetail(false);
    };

    let count = cartItems[id];

    return (
        <div key={id} className='product'>
            <img src={ProductImage} alt={ProductName} />
            <div className="des">
                <h3>{ProductName}</h3>
                <p>Rs.{Price}</p>
              
                {showDetail && (
                    <>
                        <div className="backdrop" onClick={closePopup}></div>
                        <div className="detailPopup">
                            <h2>{ProductName}</h2>
                            <p>{Description}</p>
                            <hr />
                            <h3>Product Configuration:</h3>
                            <p>{Configuration}</p>
                            <h3>Expected Delivery:</h3>
                            <p>{ExpectedDelivery}</p>
                            <h3>Modes of Payment:</h3>
                            <ul>
                                {ModesOfPayment.map((paymentMethod, index) => (
                                    <li key={index}>{paymentMethod}</li>
                                ))}
                            </ul>
                            <h3>Product Warranty:</h3>
                            <p>{Warranty}</p>
                            <h3>Owner Company:</h3>
                            <p>{OwnerCompany}</p>
                            <button onClick={closePopup}>Close</button>
                        </div>
                    </>
                )}
            </div>
            <div className='buttons'>
            <div>
            <button className="detailBtn" onClick={toggleDetail}>Product Detail</button>
            </div>
            <div>
            <button className="addtocart" onClick={() => addToCart(id)}>Add To Cart({count})</button>
            </div>
            </div>
            
        </div>
    );
};
