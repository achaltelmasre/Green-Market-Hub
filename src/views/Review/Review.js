import Navbar from "../../components/Navbar/Navbar";

import "./Review.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Review(){
    return(
        <>

                     <div className="review-img">
                       <Navbar />
                         <div className="rating-view">

                             <div>
                                 <div className=" text-center">
                                   <h1 className="fs-1" >4 <i class="bi bi-star-fill"></i>  </h1>
                                   <p className="text-dark ">15 Ratings & <br /> 1 Review </p>
                                 </div>

                                  <div>

                                 </div>
                             </div>

                         </div>
                     </div>
              
        </>
    )
}
 export default Review;