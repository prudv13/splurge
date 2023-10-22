import React from 'react'
import './ProductList.scss'
import Product from '../Product/Product'
import PropTypes from 'prop-types';

const ProductList = ({products}) => {
  console.log(products);
  return (
    <div className='product-lists grid bg-whitesmoke my-3'>
    {
      products.map(product => {
        const discountedPrice = Number((product.price) - (product.price * (product.discountPercentage / 100)));
        return (
          <Product key={product.id} product={{...product, discountedPrice}} />
        )
      })
    }
    </div>
  )
};

ProductList.propTypes = {
  products: PropTypes.array
};


export default ProductList;