import React from 'react'
import './CartPage.scss'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { shoppingCart } from '../../utils/images'
import { formatPrice } from '../../utils/helpers'
import { clearCart, getAllCarts, getCartTotal, removeFromCart, toggleCartQty } from '../../store/cartSlice'


const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector(getAllCarts);
  const {itemsCount, totalAmount} = useSelector(state => state.cart);

  if(carts.length === 0){
    return (
      <div className='container my-5'>
        <div className='empty-cart flex justify-center align-center flex-column font-manrope'>
          <img src={shoppingCart} alt='shopping cart img' />
          <span className='fw-6 fs-15 text-gray'>Your shopping cart is empty.</span>
          <Link to='/' className='shopping-btn bg-yellow'>Go shopping Now</Link>
        </div>
      </div>
    )
  }
  return (
    <div>Cart</div>
  )
}

export default Cart;