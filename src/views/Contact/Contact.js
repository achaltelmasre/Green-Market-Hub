
// import img1 from "./img/img-1.jpg";
import "./Contact.css"
import ContactCard from "./../../components/Cards/ContactCard/ContactCard";

function Contact() {
  return (
    <>
      <div className="main-background-contact-container">
        <h5 className="contact-container-heading4">Always Available Whenever You Need Us...</h5>
        <h1 className="contact-page-tagline">We’re excited to hear from you...</h1>
  
      </div>
      {/* <div>
        <img src={img1} alt="" className="contact-img-2" />
      </div> */}
      <div className="contact-main-card-containeer">
<ContactCard />
<ContactCard />
<ContactCard />
<p><i class="fa-solid fa-location-dot"></i></p>
      </div>
    </>
  )
}
export default Contact;