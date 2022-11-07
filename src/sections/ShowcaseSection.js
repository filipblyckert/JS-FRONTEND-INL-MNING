import React from 'react'
import LeftImage from '../assets/images/react-women.left.svg'
import RightImage from '../assets/images/react-women-right.svg'

const ShowcaseSection = () => {
  return (

<section className='showcase'>
        <div className="container-fluid">
        <img className="__fr-1 left-img" src={LeftImage} alt="" />
        <h1 className='__fr-1 sale '>SALE UP 
        <h1 className='discount'>To 50% Off</h1>
        <p className='free'>Online shopping free home delivery over $100</p>
        </h1> 
        <button className='shop'>SHOP NOW</button>
        <img className="__fr-1 right-img" src={RightImage} alt="" />

        </div>
</section>


  )
}

export default ShowcaseSection