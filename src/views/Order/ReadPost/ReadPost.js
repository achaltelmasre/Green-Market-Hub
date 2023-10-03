import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import { Link } from "react-router-dom";
import blogData from "./../../../configs/blogs-data.json";
import Post from "./../Posts/Post";
import "./ReadPost.css";

function ReadPost() {
  const { id } = useParams();

  const [Post, setPost] = useState({});
  useEffect(() => {
    blogData.forEach((postObj) => {
      if (postObj.id == id) {
        setPost(postObj);
      }
    });
  }, [id]);

  let [main, setMain] = useState(1)
  let[subtotal, setSubtotal] = useState(350)

//   function asdfg(){
//     {Post.price}
//   }
//   console.log(asdfg)

  function increment(){
    if(main==30){
 return
    }
    else{
        setMain(main=main+1)
        // price = price + price
    }
    
  }

  function decrement (){
    if(main==1){
        return
           }
           else{
               setMain(main=main-1)
               setSubtotal(subtotal=subtotal- subtotal)
           }
  }

  return (
    <>
      

      <div className="card-details">
        <div  className="image-div">
        <img className="imag" src={Post.image} alt="image not found" />
        </div>
        <div className="dis-text">
           
          <h1 className="col-gree"> {Post.Title} </h1>
          <h3>{Post.price} </h3>
          <p className="color-red"> 7 sold in last 18 hours</p>
          <span>Size : 1 Box</span> <br/>
          <p className="para-incr ">
            <button onClick={decrement} className="btn-dec"> - </button>
            <span className="incr-dec"> {main} KG </span>
            <button onClick={increment} className="btn-dec"> + </button>
          </p>
          <p className="sub">Subtotal: {Post.price} </p>
          
          <Link className="buttonn buy-now" to={`/Post/ReadPost/${id}`}>
          Buy Now
        </Link> <br/><br/><br/>
        <span>15 customers are viewing this produc</span> <br/><br/><br/><br/>
        <img src="https://fpsstore.in/cdn/shop/files/trust_800x-compressor_800x.png?v=1637822740" /> <br/><br/><br/><br/>

          
            {/* <span>SKU:  {Post.grame}</span>
          <span> By {Post.author}</span>
          <p>{Post.Description}</p>
          <p>{Post.content}</p> */}
        </div>
      </div>
    </>
  );
}

export default ReadPost;
