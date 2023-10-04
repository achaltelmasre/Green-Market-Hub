import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AddressForm from "./../../components/Form/AddressForm";
import "./Home.css";
import HomeCard from "../../components/Cards/HomeCard";
import DeliveryCard from "../../components/Cards/DeliveryCard";

import img1 from "./img/fresh-fruit-img1.jpg"
import img2 from "./img/vegetables-img2.jpg"
import img3 from "./img/img-3.jpg"
import fruit from "./img/fruit-img.webp"
import veg from "./img/veg-img.jpg"
import masale from "./img/garam-masala.png"
import grocery from "./img/grocery.png"
import delivery from "./img/free-delivery.png"
import store from "./img/store.png"



import { Carousel } from 'react-bootstrap';


import "./Home.css"

function Home(){
   

    return(
        <>
           

           <Navbar />
           <AddressForm />

         <div className='design-project slider-img'>
            
                <Carousel interval={6000}>
                    <Carousel.Item>
                        <img className='d-block w-100 ' src={img1} alt='First slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100 ' src={img2} alt='Third slide' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className='d-block w-100 ' src={img3} alt='Third slide' />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="text-center">
                <p className="display-4 text-center p-4 pt-5"> Fresh Fruits Online & Fresh Vegetables Online </p>

                <p className="p-3 pt-5 text-secondary ms-5 me-5 fs-5">We’re not your average fruit importers. We have expertise in sourcing the choicest of fresh fruits from around the world and distributing it across the length and breadth of India. Our top-notch distribution network strengthened through almost a century of existence in the fruit business, works efficiently to ensure the fruits are delivered far and wide with an intriguing depth of freshness. We provide fresh fruits online and fresh vegetables online.</p>

                <p className="p-3 pt-5 text-secondary ms-5 me-5 fs-5">We have expertise in providing fresh fruits online and fresh vegetables online and offline and sourcing the choicest of fruits and vegetables from around the world</p>

            </div>

            <div className="d-flex flex-wrap justify-content-center">
                    <HomeCard img={fruit} name="FRUITS" />
                    <HomeCard img={veg} name="VEGETABLES"/>
                    <HomeCard img={masale} name="MASALE"/>
            </div>


            <div>
                
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93187091679!2d73.78056541087135!3d18.52476137538877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696335391354!5m2!1sen!2sin" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="p-5"></iframe>

            </div>

            <div className="d-flex flex-wrap justify-content-center">
                    <DeliveryCard img={grocery} name="FRESH GROCERY"
                    text="Quality and A grade grocery right from the farms at your doorstep." />

                    <DeliveryCard  img={delivery} name="FREE HOME DELIVERY"
                    text="We offer free home delivery to all our clients. all  you have to do is just make a call."/>

                    <DeliveryCard  img={store} name="PICK UP FROM OUR STORE"
                    text="We have 2 store that have prompt service. so go and check out."/>
            </div>
            
           <Footer />
        </>
    );
    }

 export default Home;