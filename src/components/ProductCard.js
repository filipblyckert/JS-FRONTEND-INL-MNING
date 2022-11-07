import React from 'react'
import { NavLink } from 'react-router-dom'


const ProductCard = (item) => {

const addToWishList = (e) => {
    console.log("added to wish list")
}


const addToCompare = (e) => {
  console.log("added to compare")
}


const addToCart = (e) => {
  console.log("added to shopping cart")
}

  return (
    <div className="col-3">
            <div className="card">
                <img src={item.imageName} alt={item.name}/>
                <ul className="card-menu">

                  <div className="menu-link"><button onClick={addToWishList} className="fa-1 fa-regular fa-heart "></button></div>
                  <div><button onClick={addToCompare}  className="fa-regular fa-arrows-retweet"></button></div>
                  <div> <button onClick={addToCart}  className="fa-2 fa-regular fa-bag-shopping"></button></div>
                  
                
                
                
               
                
                    
         

                </ul>
                <div className="card-body">
                {<NavLink><button className='quick-view'>Quick View</button></NavLink> }
                </div>
                <div className="info-box">   
                <p className="card-category">{item.category}</p>                    
                <p className="card-title">{item.name}</p>
                <i className="first fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <i className="fa-solid fa-star-sharp"></i>
                <div className="euro">{item.price}</div>
                
                </div>
                <div className="card-background"></div>
            </div>
        </div>
  )
}

export default ProductCard