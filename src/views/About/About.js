import "./About.css"
import Navbar from "./../../components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./../../components/Footer/Footer"
import AboutCard from "../../components/Cards/AboutCard";
import ImgPoonam from "./poonam.jpg";
import ImgAbhi from "./abhi.jpg";
import ImgAchal from "./achal.jpg";
import ImgArti from "./arti.jpg";


function About() {
    return (
        <>
            <div className="about-container">
                <Navbar />
                <h1 className="main-heading">ABOUT US</h1>
            </div>

            <div className=" text-center mt-5">
                <h1>WE ARE AN AWESOME TEAM OF <br />
                    TRYING TO PROVIDE BEST SERVICE </h1>
                <p className="fs-5 text-center m-5">
                    Officially established in 1999, NGK has a long history that dates back to the
                    1920s. Our experience and heritage within the fruit industry in India is second
                    to none. Keeping our roots intact, we represent the same passion for quality,
                    service and values that we were built on. Today, NGK imports fresh, wholesome
                    and high quality fruits straight from the orchards of the farthest corners
                    of the world.

                    We have a vast distribution network comprising of highly dedicated professionals
                    coupled with strong logistics support, establishing a nationwide reach. Our
                    scale of operation ensures that the fruits we supply ends up in millions of
                    fruit bowls across the country.
                </p>

            </div>

            <div className=" d-flex justify-content-evenly mt-5 ">


                <div >
                    <AboutCard Img={ImgAchal} name="Achal Telmasre" tag="Front-end Developer"
                        education="Btech (IT)" 
                         linkedInLink="https://www.linkedin.com/in/achaltelmasre/"
                        githubLink="https://github.com/achaltelmasre" 
                         peerlistLink="https://peerlist.io/achalmasre" />
                </div>

                <div >
                    <AboutCard Img={ImgPoonam} name="Poonam Digole" tag="Front-end Developer"
                        education="Btech Final Year (IT)"
                        linkedInLink="https://www.linkedin.com/in/poonam-digole"
                        githubLink="https://github.com/poonamdigole" 
                         peerlistLink="https://peerlist.io/poonamdigole" />
                </div>

                <div >
                    <AboutCard Img={ImgAbhi} name="Abhijeet Kokat" tag="Front-end Developer"
                        education="Btech Third Year (CSE)"
                        linkedInLink="https://www.linkedin.com/in/abhijeetkokat007/"
                        githubLink="https://github.com/Abhijeetkokat007"
                        peerlistLink="https://peerlist.io/abhijeetkokat07" />
                </div>

                <div >
                    <AboutCard Img={ImgArti} name="Arati mendhe" tag="Front-end Developer"
                        education="BCA" linkedInLink="https://www.linkedin.com/in/aartimedhe/"
                        githubLink="https://github.com/aaru-01" 
                         peerlistLink="https://peerlist.io/aartimedhe" />
                </div>

            </div>

            <div className="row  set-margin">
                <div className="me-2 col-5 ms-2">
                    <h1> Our Mission 🎯</h1>
                    <p className="fs-5">To source a range of quality fruits from across the globe
                        and deliver them
                        fresh to customers across India.</p>
                </div>


                <div className="fs-5 col-6 ms-auto" >
                    <h1>Our Vision 👁️</h1>
                    <p> To be the most trusted and preferred Indian fruit trading business.
                        Our vision calls us to earn trust and create value for our key stakeholders:
                        Growers: By enabling their fruits reach from their farms to different
                        regions in India
                        Wholesalers: By ensuring they receive fruits fresh, every day, every time
                        Consumers: By satiating their taste preferences through a gamut of fruit
                        offerings</p>
                </div>

            </div>




            <Footer />

        </>
    )
}
export default About;