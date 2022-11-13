
import React, { useState,useEffect } from 'react'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import NotFoundView from './views/NotFoundView';
import ProductDetailsView from './views/ProductsDetailView';
import ProductsView from './views/ProductsView';
import { ProductContext } from './contexts/contexts'




function App() {


 const[ products, setProducts] = useState({
  all: [],
  featuredProducts: []

 })
 
 const fetchProducts = async () => {
  let response = await fetch('https://win22-webapi.azurewebsites.net/api/products%27')
  const json = await response.json();

  return {response, json};
};

  useEffect(() => {
    fetchProducts().then(
      data => setProducts( {...data.response, all: data.json} )
    )
  }, [])

  return (
    <BrowserRouter>

   <ProductContext.Provider value={products}>

      <Routes>
        <Route path='/' element={<HomeView/>} />

        <Route path='/contacts' element={<ContactsView/>} /> 
        <Route path='/products' element={<ProductsView/>} />
        <Route path='/*' element={<NotFoundView/>} />
        <Route path='/products/:name' element={<ProductDetailsView/>} />

        </Routes>


   </ProductContext.Provider>

    </ BrowserRouter>

  )
}

export default App