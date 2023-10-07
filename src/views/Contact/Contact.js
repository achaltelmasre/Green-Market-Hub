import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Contact.css"
// import img1 from "./img/locator2.jpg"
import img2 from "./img/green-location.jpg"
import img3 from "./img/calling.jpg";
import img4 from "./img/email1.png";
import ContactCard from "./../../components/Cards/ContactCard/ContactCard";
import { useState } from "react";
import showToast from "crunchy-toast";



function Contact() {

  const [yourName, setYourName]= useState('');
  const [yourPhoneNumber, setYourPhoneNumber]= useState('');
  const [yourEmail, setYourEmail]= useState('');
  const [yourMessage, setYourMessage]= useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

const formData = {
  yourName:yourName,
  yourPhoneNumber:yourPhoneNumber,
  yourEmail:yourEmail,
  yourMessage:yourMessage,
}

const formDataString = JSON.stringify(formData);
localStorage.setItem("formData", formDataString);

setYourName("");
setYourPhoneNumber("");
setYourEmail("");
setYourMessage("");


// alert(" Contact Form data saved successfully!");
showToast('Contact Details saved successfully!', 'success', 3000);
};


  return (
    <>

      <Navbar/>

 

      <div className="main-background-contact-container">
        <h5 className="contact-container-heading4">Always Available Whenever You Need Us...</h5>
        <h1 className="contact-page-tagline">We’re excited to hear from you...</h1>

        <div className="contact-main-card-containeer">
          <ContactCard Img={img2} Heading={'C120- 121, The Shopping Mall, Arjun Marg, Dlf City Phase I, Haryana 122002'} Text={'+91 4563765897'} Img2={img3} Text2={'DLF CITY PHASE I, GURUGRAM,HARYANA'} />
          <ContactCard Img={img2} Heading={'Shop No. 1, F-Block Market Shopping Plaza, South City II, Gurugram, 122018'} Text={'+91 8767564534'} Img2={img3} Text2={'SOUTH CITY II, GURUGRAM,HARYANA'} />
          <ContactCard Img={img2} Heading={'D-114 Shop No-1 Ground floor Panchsheel Enclave New Delhi, Delhi 110017'} Text={'+91 9708654567'} Img2={img3} Text2={'PANCHSHEEL ENCLAVE, NEW DELHI'} />
        </div>
      </div>
      <div className="contact-bg-img2">
        <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14028.849865557753!2d77.08816623586222!3d28.47314742434485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d530a1809f%3A0xf8af202a245b1ba1!2sDLF%20Phase%201%2C%20Sector%2026%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1696361164573!5m2!1sen!2sin"></iframe>
        <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14036.1818104376!2d77.04098483582372!3d28.417885334690716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229b56d6b74f%3A0x5cad26a539a04ab5!2sSouth%20City%20II%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1696361399710!5m2!1sen!2sin"></iframe>

        <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7009.635189460766!2d77.22417818832608!3d28.545201877529934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce230027ea8db%3A0xb193f4460c33c832!2sPanchsheel%20Enclave%2C%20New%20Delhi%2C%20Delhi%20110017!5e0!3m2!1sen!2sin!4v1696361680107!5m2!1sen!2sin"></iframe>
      </div>
      <div className="contact-conatiner3-bg">
        <div className="contact-main-card-containeer-2">
          <ContactCard Img={img2} Heading={'8 Aurobindo Market, Hauz Khas, New Delhi, 110016'} Text={'+91 879 567 2234'} Img2={img3} Text2={'AUROBINDO MARKET, NEW DELHI'} />
          <ContactCard Img={img2} Heading={'5, Community Centre (half ground floor, Basant Lok, Vasant Vihar, New Delhi, Delhi 110057'} Text={'+91 564 987 3458'} Img2={img3} Text2={'VASANT VIHAR, NEW DELHI'} />
          <ContactCard Img={img2} Heading={'Plot no 1, Rd Number 51, West Punjabi Bagh, New Delhi, 110026'} Text={'+91 234 045 8790'} Img2={img3} Text2={'PUNJABI BAGH, NEW DELHI'} />
        </div>
      </div>
      <div className="contact-bg-img3">
        <iframe className="contact-map2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14018.357237148517!2d77.18537644072495!3d28.552061600847196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce20d230fd6d7%3A0x72a9671729ecb984!2sAurobindo%20Market%2C%20Sri%20Aurobindo%20Marg%2C%20Block%20C%202%2C%20Bhim%20Nagri%2C%20Hauz%20Khas%2C%20New%20Delhi%2C%20Delhi%20110016!5e0!3m2!1sen!2sin!4v1696363282518!5m2!1sen!2sin"></iframe>
        <iframe className="contact-map2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28034.20271341383!2d77.13947130885522!3d28.561493588323312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1daf885ea341%3A0x7d8bdb6b1922f23a!2sVasant%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1696363374374!5m2!1sen!2sin"></iframe>

        <iframe className="contact-map2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14003.466148612828!2d77.11366078599558!3d28.66371458854441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0396e99a6f9b%3A0xe125214ba794b2fc!2sPunjabi%20Bagh%2C%20Delhi!5e0!3m2!1sen!2sin!4v1696363467867!5m2!1sen!2sin"></iframe>
        <img src={img4} className="img-email-box" /><br /><br />
        <h4 className="email-address-contact-page">info@freshproduce.co.in</h4>
      </div>
      <div className="contact-bg-img-3-women-shoping">
<form onSubmit={handleSubmit}>

<h2 className="contact-form-heading1">Say Hello.!!</h2>
<h4 className="contact-form-heading1">We Would Love To Hear From You. Let’s Have A Talk</h4><br/><br/>
<div className="contact-main-form">

<input type="text"
 placeholder="Your Name" 
 className="contact-user-name" 
 required
 onChange={(e)=>{
  setYourName(e.target.value);
 }}
 value={yourName}
 /><br/>


<input type="text"
 placeholder="Your Phone Number" 
 className="contact-user-name"
  required
  onChange={(e)=>{
    setYourPhoneNumber(e.target.value);
   }}
   value={yourPhoneNumber}
  /><br/>


<input type="email" 
placeholder="Your Email"
 className="contact-user-name"
  required
  onChange={(e)=>{
    setYourEmail(e.target.value);
   }}
   value={yourEmail}
  /><br/>


<input type="text" 
placeholder="Your Message" 
className="contact-user-name-msg"
 required
 onChange={(e)=>{
  setYourMessage(e.target.value);
 }}
 value={yourMessage}
 /><br/>
{/* <input type="radio"/><span className="form-radio-button-tagline">I consent to Fresh Produce Shoppe | Buy Fruits in Gurgaon collecting my details through this form.</span><br/> */}
<button type="submit" className="contact-pg-btn-submit">SUBMIT</button>
</div>
</form>
      </div>

      <Footer />
    </>
  )
}
export default Contact;