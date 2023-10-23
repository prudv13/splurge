import React from 'react';
import './App.scss';
import { Home, CategoryProduct, ProductSingle, Cart, Search } from './pages/index';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        
        <Routes>
          <Route path ='/' element={<Home />} />
          <Route path ='/product/:id' element={<ProductSingle />} />
          <Route path ='/category/:category' element = {<CategoryProduct />}/>
          <Route path = '/cart' element={<Cart />} />
          <Route path = '/search/:searchTerm' element={<Search />} />
        </Routes>
        
        <Footer />
    </div>
  )
}

export default App;