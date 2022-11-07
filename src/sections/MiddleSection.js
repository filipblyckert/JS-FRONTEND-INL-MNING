import React from 'react'
import PamelaImage from '../assets/images/pexels-pamela.jpg'
import SaleImage from '../assets/images/pexels-sale.jpg'
const MiddleSection = () => {
  return (
    <section className='boxes'>
        <div className='box-left'>
            <img className="pamela" src={PamelaImage} alt="" />
            <h1>Pamela Reif's <br></br>Top Picks</h1>
            <button className='shop-1'>SHOP NOW</button>

        </div>

        <div className='box-right'>
            <h1>Let's Be Conscious</h1>
            <img className="black-friday" src={SaleImage} alt="" />
            <button className='shop-2'>FLASH SALE</button>

        </div>



    </section>
  )
}

export default MiddleSection