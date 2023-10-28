import React, { useEffect } from 'react'
import './CategoryProduct.scss'
import ProductList from '../../components/ProductList/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductsOfCategory, getAllProductsByCategory, getCategoryProductsStatus } from '../../store/categorySlice'
import Loader from '../../components/Loader/Loader'
import { STATUS } from '../../utils/status'


const CategoryProduct = () => {
  const dispatch = useDispatch();
  const {category} = useParams();
  const categoryProducts = useSelector(getAllProductsByCategory);
  const categoryProductsStatus = useSelector(getCategoryProductsStatus);

  useEffect(() => {
    dispatch(fetchProductsOfCategory(category));
  }, [dispatch, category]);

  return (
    <div className='cat-products py-5 bg-whitesmoke'>
      <div className='container'>
        <div className='cat-products-content'>
          <div className='title-md px-4 py-2'>
            <h3>See our {category.replace("-", " ")}</h3>
          </div>

          {
            categoryProductsStatus === STATUS.LOADING ? <Loader /> : <ProductList products = {categoryProducts} />
          }
        </div>
      </div>
    </div>
  )
}

export default CategoryProduct;