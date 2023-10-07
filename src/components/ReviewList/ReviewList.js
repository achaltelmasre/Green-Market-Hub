import React from 'react'
import "./ReviewList.css";

const ReviewList = ({id, Name, Content, Rating})=>{
    return (
        <div className='ReviewList-main-containerr'>

      
        <div className='List-contaienr-review-pg'>
         <h4>{Name}</h4>
         <p className='review-content'>{Content}</p>
         <p className='Rating-reviw'><b>⭐⭐⭐{Rating}</b></p>
        </div>
        </div>
    )}
 
  
export default ReviewList
