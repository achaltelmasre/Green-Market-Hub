import "./About.css"
import Navbar from "./../../components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AboutCard from "../../components/Cards/AboutCard";


function About() {
    return (
        <>
            <div className="about-container">
                <Navbar />
                <h1 className="main-heading">ABOUT</h1>
            </div>

            <div className="container text-center">
                <div className="row m-5">

                    <div className="col-6">
                        <div>
                        {/* <AboutCard name= "Poonam Digole" education = "Btech Final Year (IT)"/> */}
                        </div>
                    </div>

                    <div className="col-6">
                        {/* Column */}
                    </div>

                </div>
            </div>


        </>
    )
}
export default About;