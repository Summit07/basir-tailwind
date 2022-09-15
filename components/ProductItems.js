/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const ProductItems = ({product}) => {
  return (
    <div className='card'>
        <Link href={`/product/${product.slug}`}>
            <a>
                <img src={product.img} alt={product.name} className="rounded shadow" />
                
            </a>
        </Link>

        <div className='flex flex-col items-center justify-center p-5'>
            <Link href={`/product/${product.slug}`} >
                <a>
                    <h2 className='text=lg'>{product.name}</h2>
                </a>
            </Link>
            <p>brand</p>
            <p>price</p>
            <button className='primary-button' type="button" >Add to cart</button>
        </div>


    </div>
  )
}

export default ProductItems