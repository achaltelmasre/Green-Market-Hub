import React from 'react'
import "./ReviewList.css";

const ReviewList = ({id, name, content, rating,obj, setReviewEditable})=>{
    return (
        <div className='ReviewList-main-container text-center '>

      
        <div className='List-contaienr-review-pg'>
        <h4>{}</h4>
         <h4 className=''>{name}</h4>
         <p className='review-content '>{content}</p>
         <p className='Rating-reviwe p-2'><b>⭐⭐⭐{rating}</b></p>

            <span className='review-edit-icon'
            onClick={()=> {
                setReviewEditable(id);
            }}
            >
            ✏️
            </span>
        </div>
        </div>
    )}
 
  
export default ReviewList
