import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import ReviewList from "../../components/ReviewList/ReviewList";
import "./Review.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import showToast from 'crunchy-toast';
import { saveListToLocalStorage } from "./../../components/Util/ReviewLocalStorage";

export const Review = () => {
  const [reviewList, setReviewList] = useState([

       {
                    id: 1,
                    name: "Vaibhavi",
                    content: "Overall, I highly recommend FreshVeggieShop.com to anyone who values quality, convenience, and a wide selection of fresh produce. They have become an essential part of my healthy eating routine.",
                    rating: "3 Stars"
       },
       {
                    id: 3,
                    name: "Vaishanvi",
                    content: "Always wonderful quality, fresh and tasty from this lovely family run business. Next best thing to grow your own produce and the online service works well with easy ordering and prompt and friendly delivery. Best fruit and veg service in Shropshire!",
                    rating: "3 Stars"
         }
  ]);
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('Review'));
    if (list && list.length > 0) {
      setReviewList(list);
    }
  }, []);

  const clearInputFields = () => {
    setName('');
    setContent('');
    setRating('');
  };

  const findReviewIndexById = (reviewId) => {
    return reviewList.findIndex((review) => review.id === reviewId);
  };

  const checkRequiredFields = () => {
    if (!name || !content || !rating) {
      showToast('Name, Content, and Rating are required', 'alert', 3000);
      return false;
    }
    return true;
  };

  const addReviewToList = () => {
    if (checkRequiredFields() === false) {
      return;
    }

    const randomId = Math.floor(Math.random() * 1000);

    const obj = {
      id: randomId,
      name: name,
      content: content,
      rating: rating
    };

    const newReviewList = [...reviewList, obj];
    setReviewList(newReviewList);

    clearInputFields();
    saveListToLocalStorage(newReviewList);
    showToast('Review added successfully', 'success', 3000);
  };

  const updateReview = () => {
    if (checkRequiredFields() === false) {
      return;
    }

    const indexToUpdate = findReviewIndexById(id);

    const updatedReviewList = [...reviewList];
    updatedReviewList[indexToUpdate] = {
      id: id,
      name: name,
      content: content,
      rating: rating
    };

    setReviewList(updatedReviewList);

    clearInputFields();
    saveListToLocalStorage(updatedReviewList);
    showToast('Review updated successfully', 'info', 3000);

    setId(0);
    setIsEdit(false);
  };

  const setReviewEditable = (id) => {
    setIsEdit(true);
    setId(id);

    const index = findReviewIndexById(id);
    const currentEditReview = reviewList[index];

    setName(currentEditReview.name);
    setContent(currentEditReview.content);
    setRating(currentEditReview.rating);
  };

  return (
    <>
      <Navbar />

      <div className="review-img">
        <div className="flex-contsiner-review">
          <div className="added-review-container">
            <h4 className="text-center show-review m-3 mt-5 pt-5">
              {isEdit ? 'Update Review' : 'Add Review'}
            </h4>
            <div className="text-center add-input m-5">
              <form>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  placeholder="Enter Your Name"
                  className="review-input p-2 ps-5 pe-5 m-2"
                />
                <input
                  type="text"
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                  placeholder="Enter Content"
                  className="review-input p-2 ps-5 pe-5 m-2"
                />
                <input
                  type="text"
                  value={rating}
                  onChange={(e) => {
                    setRating(e.target.value);
                  }}
                  placeholder="Enter Rating"
                  className="review-input p-2 ps-5 pe-5 m-2"
                />
                <div className="btn-contain">
                  <button
                    className="btn-add-review-list"
                    type="button"
                    onClick={() => {
                      isEdit ? updateReview() : addReviewToList();
                    }}
                  >
                    {isEdit ? 'Update' : 'Add'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <h4 className="reviewss-heading p-3">Customer's Ratings & Reviews</h4>
        <div className="flex-contsiner-review p-2">
          <div className="reviews-show-container mb-5">
            <div className="mapping-reviws p-2 m-5 mb-5">
              {reviewList.map((reviewItem, index) => {
                const { id, name, content, rating } = reviewItem;
                return (
                  <ReviewList
                    id={id}
                    name={name}
                    content={content}
                    rating={rating}
                    key={index}
                    setReviewEditable={setReviewEditable}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <br /><br />
      </div>

      <Footer />
    </>
  );
};

export default Review;