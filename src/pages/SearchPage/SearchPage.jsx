import React, { useEffect } from 'react'
import './SearchPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { STATUS } from '../../utils/status'
import Loader from '../../components/Loader/Loader'
import ProductList from '../../components/ProductList/ProductList'
import { clearSearch, fetchAsyncSearchProduct, getSearchProducts, getSearchProductsStatus, setSearchTerm } from '../../store/searchSlice'


const Search = () => {
  const dispatch = useDispatch();
  const {searchTerm} = useParams();
  const searchProducts = useSelector(getSearchProducts);
  const searchProductsStatus = useSelector(getSearchProductsStatus);

  useEffect(() => {
    dispatch(clearSearch())
    dispatch(fetchAsyncSearchProduct(searchTerm));
  }, [searchTerm]);

  if(searchProducts.length === 0) {
    return (
      <div className='container flex justify-center'>
        <div className='fw-5 text-danger py-5'>
          <h3>No Products found.</h3>
        </div>
      </div>
    )
  }

  return (
    <main>
      <div className='search-content bg-whitesmoke'>
        <div className='container'>
          <div className='py-5'>
            <div className='title-md'>
              <h3 className='px-4 py-2'>Search results:</h3>
            </div>
            <br />
            {
              searchProductsStatus === STATUS.LOADING ? 
              <Loader /> :
              <ProductList products={searchProducts} />
            }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Search;