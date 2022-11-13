import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import ErrorImage from '../assets/images/error-img-1.jpg'


const NotFoundView = () => {
  return (

    <>
    <MainMenuSection />
    <div className='container d-flex justify-content-center align-items-center'>
      <h1 className='page'>404 - Page Not Found</h1>
      
    </div>
    <img className="error" height="480px" width="600px" src={ErrorImage} alt="" />
    <div style={{ position: "fixed", bottom: "0", width:"100%"}}>
        <FooterSection/>
    </div>
  
</>
    
  )
}

export default NotFoundView