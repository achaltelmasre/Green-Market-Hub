import React from 'react'
import "./ContactCard.css";

function ContactCard({ props, Img, Heading, Text, Img2, Text2 }) {

  return (
    <div className='main-contact-card-container'>
      <div className='contact-card'>
        <img src={Img} className='card-loaction-img' />
        <br /><br />
        <h2 className='address'>{Heading}</h2><br />

        <img src={Img2} className='card-loaction-img' />
        <br /><br />
        <h3 className='heading3-phnno'>{Text}</h3><br /><br/>
        <h3 className='heading3-phnno'>{Text2}</h3><br />

      </div>
      
    </div>
  )
}

export default ContactCard
