import React, { useEffect } from 'react'
import './Home.scss'
import HeaderSlider from '../../components/Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../store/categorySlice';
import ProductList from '../../components/ProductList/ProductList';
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/productSlice';
import Loader from '../../components/Loader/Loader';
import { STATUS } from '../../utils/status';

const Home = () => {

  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getAllProductsStatus);
  
  useEffect(() => {
    dispatch(fetchAsyncProducts(50));
  }, []);
  

  return (
    <main>
      <div className='slider-wrapper'>
        <HeaderSlider />
      </div>
      <div className='main-content bg-whitesmoke'>
        <div className='container'>
          <div className='categories py-5'>
            <div className='categories-item'>
              <div className='title-md px-4 py-2'>
                <h3>See our products</h3>
              </div>

              {
                productStatus === STATUS.LOADING ? 
                <Loader /> :
                <ProductList products={products} />
              }
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home;