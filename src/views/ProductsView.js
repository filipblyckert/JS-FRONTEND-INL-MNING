import React, {useContext} from 'react'
import ProductGridSection from '../sections/ProductGridSection'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContext } from '../contexts/contexts'


const ProductsView = () => {
  const productContext = useContext(ProductContext)
  return (
    <>
   
    <MainMenuSection />
    <BreadcrumbSection currentPage="Products"/> 
    <ProductGridSection title= "Products" items={productContext.all}/> 
    <FooterSection />
    
    </>
      
  
  )
}

export default ProductsView