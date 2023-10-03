import "./About.css"
import Navbar from "./../../components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from "./../../components/Footer/Footer"
import AboutCard from "../../components/Cards/AboutCard";


function About() {
    return (
        <>
            <div className="about-container">
                <Navbar />
                <h1 className="main-heading">ABOUT</h1>
            </div>

            <div className="container text-center mt-5">
                <h1>WE ARE AN AWESOME TEAM OF <br />
                    TRYING TO MAKE A CHANGE</h1>
                <p className="fs-5 mt-4">
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


                <div className="card ">
                    <AboutCard name="Achal" education="Btech Final Year (IT)" />
                </div>

                <div className="card">
                    <AboutCard name="Poonam Digole" education="Btech Final Year (IT)" />
                </div>

                <div className="card">
                    <AboutCard name="Abhijeet Kokat" education="Btech Final Year (IT)" />
                </div>

                <div className="card">
                    <AboutCard name="Arati mendhe" education="Btech Final Year (IT)" />
                </div>

            </div>

            <div className="row  m-5">
                <div className="me-2 col-5 ms-2">
                    <h1> Our Mission</h1>
                    <p className="fs-5">To source a range of quality fruits from across the globe 
                     and deliver them
                        fresh to customers across India.</p>
                </div>


                <div className="fs-5 col-6 ms-auto" >
                    <h1>Our Vision</h1>
                    <p> To be the most trusted and preferred Indian fruit trading business.
                        Our vision calls us to earn trust and create value for our key stakeholders:
                        Growers: By enabling their fruits reach from their farms to different 
                         regions in India
                        Wholesalers: By ensuring they receive fruits fresh, every day, every time
                        Consumers: By satiating their taste preferences through a gamut of fruit 
                         offerings</p>
                </div>

            </div>

<Footer/>

        </>
    )
}
export default About;