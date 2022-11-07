import React, {useContext} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import { ProductContext } from '../contexts/contexts'
import MiddleSection from '../sections/MiddleSection'
import BottomLinksSection from '../sections/BottomLinksSection'


const HomeView = () => {
  const productContext = useContext(ProductContext)
  window.top.document.title ='Fixxo.'

  return (
    <>
        <MainMenuSection />
        <ShowcaseSection />
        <ProductGridSection title= "Featured Products" items={productContext.featuredProducts}/> 
        <MiddleSection/>
        <ProductGridSection title= "Bottom Products" items={productContext.bottomProducts}/>
        <BottomLinksSection/>
        <FooterSection/>
    </>
    
  )
}

export default HomeView