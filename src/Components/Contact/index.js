import React from 'react'
import './style.css'

const Contact = () => {

  const submitHandler = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contact-main'>
      <h1>Contact Me</h1>
      <form className="cf" onSubmit={(e) => submitHandler(e)}>
        <div className="half left cf">
          <input type="text" id="input-name" placeholder="Name" />
          <input type="email" id="input-email" placeholder="Email address" />
          <input type="text" id="input-subject" placeholder="Subject" />
        </div>
        <div className="half right cf">
          <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
          <button type="submit" id="input-submit" >
          Send
        </button>
        </div>  
        
      </form>

      
    </div>
  )
}

export default Contact