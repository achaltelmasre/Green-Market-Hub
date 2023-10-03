import React from "react";
import { Link } from "react-router-dom";
import "./PreviewPostCard.css";
import ReadPost from "../../views/Order/ReadPost/ReadPost";

function PreviewPostCard({
  id,
  image,
  Title,
  author,
  Description,
  price,
  delet,
}) {
  return (
   
    <div className="dis-flex">
      <div className="preview-post-card">
        <img className="image-card" src={image} alt="image" />
        <h4 className="title-card">{Title}</h4>
        <del> RS{delet} </del> <h4 className="pric"> RS <span className="price-card">{price}</span> </h4> <br />
        
        <span> {author}</span>
        <p>{Description}</p>
        <Link className="button view" to={`https://chat.openai.com/c/23638d7c-296c-4d50-9065-d9d20fc31f25`}>
          
          View Now
        </Link>

        <Link className="button buy-now" to={`/Post/ReadPost/${id}`}>
        
          Buy Now
        </Link>
      </div>
    </div>
  
  );
}

export default PreviewPostCard;
