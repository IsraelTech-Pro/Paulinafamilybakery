import React from 'react';
import breadLeft from '../../assets/cokies.jpg';
import '../../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide'  style={{backgroundImage:`url(${breadLeft})`}}>

      </div>
      <div className='rightSide'>
        <h1>CONTACT US</h1>

        <form id='contact-form' method="POST">
            <lebel htmlFor="name">Full Name </lebel>
            <input name='name' placeholder='Enter Full Name...' type='text'/>
<br/>
            <lebel htmlFor="email">Email </lebel>
            <input name='email' placeholder='Enter email...' type='email'/>
            <br/>
            <lebel htmlFor="message">Message</lebel>
            <textarea rows="6" placeholder='Enter message' name='message' required></textarea>
            <button type='submit'>Send Message</button>



        </form>
      </div>
    </div>
  )
}

export default Contact
