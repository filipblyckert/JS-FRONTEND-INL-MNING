import React, {useContext} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import { ProductContext } from '../contexts/contexts'
import MiddleSection from '../sections/MiddleSection'
import BottomLinksSection from '../sections/BottomLinksSection'
import GreyboxSection from '../sections/GreyboxSection'


const HomeView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title ='Fixxo.'

  function getSubsetOfProducts(start, end) {
    return productContext.all.slice(start, end);
  }

  return (
    <>
        <MainMenuSection />
        <ShowcaseSection />
        <ProductGridSection title= "Featured Products" items={getSubsetOfProducts(0, 8)}/> 
        <MiddleSection/>
        <GreyboxSection/>
        <ProductGridSection title= "" items={getSubsetOfProducts(8, productContext.all.length)}/> 

        <BottomLinksSection/>
        <FooterSection/>
    </>

  )
}

export default HomeView