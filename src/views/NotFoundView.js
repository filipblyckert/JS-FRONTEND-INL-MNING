import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'



const NotFoundView = () => {
  return (

    <>
    <MainMenuSection />
    <div className='container d-flex justify-content-center align-items-center'>
      <h1>404 - Page Not Found</h1>
    </div>
    
    <div style={{ position: "fixed", bottom: "0"}}>
        <FooterSection/>
    </div>
  
</>
    
  )
}

export default NotFoundView