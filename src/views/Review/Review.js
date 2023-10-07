import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import ReviewList from "../../components/ReviewList/ReviewList";
import "./Review.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import showToast from "crunchy-toast";
import { useEffect } from "react";

function Review() {

    const [reviewList, setReviewList] = useState([
        {
            id: 1,
            Name: "Aarti Medhe",
            Content: "excellent shopping",
            Rating: "3 Stars"
        },
        {
            id: 2,
            Name: "Mrunal More",
            Content: "excellent shopping",
            Rating: "3 Stars"
        }
    ])

    const [Name, setName] = useState('')
    const [Content, setContent] = useState('')
    const [Rating, setRating] = useState('')

    // useEffect(()=>{
    //         const tasklist = JSON.parse(localStorage.getItem('Reviewlist'))
    // setReviewList(tasklist)

    // },[])

   

    const saveListToLocalStorage = (list) => {
        localStorage.setItem('Reviewlist', JSON.stringify(list))
    }



    const addTaskToList = () => {
        const randomId = Math.floor(Math.random() * 1000);
        const obj = {
            id: randomId,
            Name: Name,
            Content: Content,
            Rating: Rating
        }

        const newReviewList = [...reviewList, obj]

        setReviewList(newReviewList)

        setReviewList(newReviewList)
        setName('');
        setContent('');
        setRating('');

        saveListToLocalStorage(newReviewList);
        showToast('Review Added Successfully!🤩', 'success', 3000);
    }
    return (
        <>

            <div className="review-img">
                <Navbar />

                <div className="progress-bar-review-container">
                    <div>
                        <h1>3 ⭐</h1>
                        <span>25 Ratings &<br /> 5 Reviews</span>
                    </div>

                    <div className="progress-bar-review">
                        <div className="progress mb-2 shadow-sm" style={{ height: "6px" }} role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{ width: "93%" }}>

                            </div>
                        </div>
                        <div className="progress mb-2 shadow-sm" style={{ height: "6px" }} role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{ width: "83%" }}>

                            </div>
                        </div>
                        <div className="progress mb-2 shadow-sm" style={{ height: "6px" }} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{ width: "73%" }}>

                            </div>
                        </div>
                        <div className="progress mb-2 shadow-sm" style={{ height: "6px" }} role="progressbar" aria-label="Danger example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-warning" style={{ width: "23%" }}>

                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="reviewss-heading">Customer's Ratings & Reviews</h4>
                <div className="flex-contsiner-review">

                    <div className="reviews-show-container">

                        <h4 className="text-center-show-review">Show Reviews</h4>

                        <div className="mapping-reviws">
                            {
                                reviewList.map((ListItem, index) => {
                                    const { id, Name, Content, Rating } = ListItem;

                                    return <ReviewList id={id} Name={Name} Content={Content} Rating={Rating} key={index} />
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className="flex-contsiner-review">
                    <div className="added-review-container">
                        <h4 className="text-center-show-review main-h">Added Reviews and Ratings</h4>
                        <br /><br /><br />
                        <div>
                            <form>
                                {/* <h1>Show me Name: {Name}</h1> */}

                                <input type="text"
                                    placeholder="Enter Your Name"
                                    required
                                    value={Name}
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    className="task-input nameratecls"
                                />


                                <input type="text"
                                    placeholder="Enter Content"
                                    required
                                    value={Content}
                                    onChange={(e) => {
                                        setContent(e.target.value)
                                    }}
                                    className="task-input content-cls"
                                />


                                <input type="text"
                                    placeholder="Enter Rating"
                                    required
                                    value={Rating}
                                    onChange={(e) => {
                                        setRating(e.target.value)
                                    }}
                                    className="task-input namecls"
                                />
                                <div>
                                    <button className="btn-add-review-list" type="button" onClick={addTaskToList}>Add Review</button>
                                </div>
                            </form>
                        </div>
                    </div>



                </div>

            </div>

            <Footer />
        </>
    )
}
export default Review;


