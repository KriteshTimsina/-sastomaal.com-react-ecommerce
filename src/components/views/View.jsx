
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../../pages/home/Home";
import { Detail } from '../../pages/details/Detail';
import Cart from '../../pages/cart/Cart';
import Navbar from '../navbar/Navbar';
import Login from '../../pages/login/Login';
import Signup from '../../pages/Signup/Signup';
import CategoryPage from '../../pages/categoryPage/CategoryPage';



const View = () => {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default View