import React from 'react';
import './App.scss';
import { Home, CategoryProduct, ProductSingle, Cart, Search } from './pages/index';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
        <Header />
        <Sidebar />

        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
  )
}

export default App;