import React from 'react'
import { Products } from '../../product'
import { Product } from './Product'

import './shop.css'
export const Shop = () => {
    return (
        <div className='shop'>
            <div>
                <h1>CartWave</h1>
            </div>
            <div className='products'>
                {" "}
                {
                    Products.map((product) => (
                        <Product data={product} />
                    ))
                }

            </div>
        </div>
    )
}
