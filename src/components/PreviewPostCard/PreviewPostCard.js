import React from "react";
import { Link } from "react-router-dom";
import "./PreviewPostCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ReadPost from "../../views/Order/ReadPost/ReadPost";
import AddressForm from "../Form/AddressForm";

function PreviewPostCard({
  id,
  image,
  Title,
  author,
  Description,
  price,
  delet, removeTaskfromList, obj, setTaskEditable
}) {
  return (
    <>
      <div className="dis-flex">
        <div className="preview-post-card">
          <img className="image-card" src={image} alt="image" />
          <h4 className="title-card">{Title}</h4>
          <del> RS{delet} </del>{" "}
          <h4 className="pric">
            {" "}
            RS <span className="price-card">₹{price}</span>{" "}
          </h4>{" "}
          <br />
          <span> {author}</span>
          <p>{Description}</p>
          <Link
            className="button view"
            to={`/Post/ReadPost/${id}`} >
            View Now
          </Link>
          <AddressForm />
        
          <span
            className="card-delet"
            onClick={() => {
              removeTaskfromList(obj);
            }}
          >

            <FontAwesomeIcon icon={faXmark} />
          </span>
          
        </div>
      </div>
      
    </>
  );
}

export default PreviewPostCard;
