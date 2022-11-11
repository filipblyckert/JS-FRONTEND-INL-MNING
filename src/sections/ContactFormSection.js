import React, { useState } from 'react'


const ContactFormSection = () => {
const[contactForm, setContactForm] = useState({name:'', email:'', comments:'' })
const[formErrors, setFormErrors] = useState({})
const [canSubmit, setCanSubmit] = useState(false)
const [failedCanSubmit, setFailedCanSubmit] = useState(false)
const validate = (values) => {
    const errors = {}
    const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    if(!values.name)
        errors.name = "You must enter a name"

    if(!values.email)
        errors.email = "You must enter an email-adress"
    else if(!regex_email.test(values.email))
        errors.email = "You must enter a valid email-adress (eg. name@domain.com)"    

    if(!values.comments)
        errors.comments = "You must enter a comments"    
     else if(values.comments.length < 5)
        errors.comments = "Your comments must be longer than five characters"



    if(Object.keys(errors).length===0)    
        setCanSubmit(true)

    else
        setCanSubmit(false)

    return errors;
}


const handleChange = (e) => {
   const {id, value} = e.target
   setContactForm({...contactForm, [id]: value})
   console.log(e)
}


const handleSubmit = (e) => {
    e.preventDefault()
    setFailedCanSubmit(false)
    setCanSubmit(false)
    setFormErrors(validate(contactForm))
    console.log('form:', contactForm)
    
    if ([]) {

       
       let json = JSON.stringify( contactForm)
       let jsonFel = JSON.stringify({contactForm})
       console.log('JSON:',json)
       console.log('FELJSON:',jsonFel)
       
        fetch('https://win22-webapi.azurewebsites.net/api/contactform',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        body: json
        })
        .then(res =>{
            console.log(res)

            if (res.status === 200) {
                setCanSubmit(true)
            }
            else{
               setCanSubmit(false) 
               setFailedCanSubmit(true)
            }
        })

        } else{
            setCanSubmit(false)
        }
}




  return (
   <section className='contact-form'>
    <div className='container'>
      {
        canSubmit ?  
        (<div className='alert alert-success text-center' role="alert">
            <h3>Thank you for your comments!</h3>
            <p>We will contact you as soon as possible.</p>
        </div>) : (<></>) }

        {failedCanSubmit ?  
        (<div className='alert alert-danger text-center' role="alert">
        <h3>Something went wrong!</h3>
         <p>We couldn't submit your comments right now</p>
        </div>) : (<></>)}
        
        

        <>
            <h2>Come in contact with us </h2>
        <form onSubmit={handleSubmit} noValidate>

        <div>

            <input id='name' type="text"  placeholder='Your Name'value={contactForm.name} onChange={handleChange} />
            <div className='errorMessage'>{formErrors.name}</div>

        </div>


        <div>

            <input id='email' type="email" placeholder='Your Mail'value={contactForm.email} onChange={handleChange} />
            <div className='errorMessage'>{formErrors.email}</div>

        </div>


        <div className='textarea'>

            <textarea id='comments' placeholder='comments'value={contactForm.comments}  onChange={handleChange} ></textarea>
            <div className='errorMessage'>{formErrors.comments}</div>

        </div>

        <div>
            <button type='submit' className='comment-button'>Post comments</button>
        </div>

        </form>

        </>

        
     

    </div>

   </section>
  )
}

export default ContactFormSection