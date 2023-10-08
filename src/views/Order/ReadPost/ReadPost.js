import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { Link } from "react-router-dom";
import blogData from "./../../../configs/blogs-data.json";
import vegetableData from "./../../../configs/vegetable-data.json"
import Post from "./../Posts/Post";
import FruitcardAdd from "./../FruitcardAdd/FruitcardAdd"
import PreviewPostCard from "../../../components/PreviewPostCard/PreviewPostCard";
import "./ReadPost.css";
 
function ReadPost( {price}) {

  const Home = () => {
    const [card, setcard] = useState([
      {
        id:4,
        Title : "Amrood (Guava)",
        image : "https://fpsstore.in/cdn/shop/products/green-guava-500x500_360x.png?v=1641460793",
        price: 60, 
        delet: "100",
        grame : "398",
        Description: "this is my first blog",
        content: "this is my first blog",
        author: "ddffg" 
    },
    {
        id:5,
        Title : "Custard Apple",
        image : "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
        price: 180, 
        delet: "200",
        
        grame : "398",
        Description: "this is my first blog",
        content: "this is my first blog",
        author: "qwe" 
    }
    ]);
  }

  const { id } = useParams();
  

  
  const [post, setPost] = useState({});
  
  // console.log(post.price)
  // const [prices,setPrices]=useState(post.price)
  let [dataofprice,setDataofprice]=useState()



 

  
  useEffect(() => {
    blogData.forEach((postObj) => {
      if (postObj.id == id) {
        setPost(postObj);
        setDataofprice(postObj.price)
      }
    });
  }, [id]);

  useEffect(() => {
    vegetableData.forEach((postObj) => {
      if (postObj.id == id) {
        setPost(postObj);
        setDataofprice(postObj.price)
      }
    });
  }, [id]);

  // useEffect(() => {
  //   card.forEach((postObj) => {
  //     if (postObj.id == id) {
  //       setPost(postObj);
  //       setDataofprice(postObj.price)
  //     }
  //   });
  // }, [id]);

  let [main, setMain] = useState(1)
  let[subtotal, setSubtotal] = useState(180)
  


//   function asdfg(){
//     {Post.price}
//   }
//   console.log(asdfg)

  function increment(){
    if(main==30){
      // let pric=350;

 return
    }
    else{
        setMain(main=main+1)
        setSubtotal(subtotal=subtotal+ subtotal)
        
    }
    
  }

  function decrement (){
    if(main==1){
      // let pric=350;
        return
           }
           else{
               setMain(main=main-1)
               setSubtotal(subtotal=subtotal- subtotal)
           }
  }


//   <div className="container-main">
// {card.map((card, index) => {
//               const { id, Title, description, priority ,delet,price,image} = card;

//               return (
//                 <PreviewPostCard
//                   id={id}
//                   image={image}
//                   Title={Title}
//                   description={description}
//                   priority={priority}
//                   delet={delet}
//                   price={price}
//                   key={index}
                 
//                   obj={card}
                  
//                 />
//               );
//             })}
//          </div> 
  

  return (
    <>
      <Navbar/> 
      {/* (card.map((card, index) => {
              const { id, Title, description, priority ,delet,price,image} = card;

      return ( */}
      <div className="card-details">
        <div  className="image-div">
        <img className="imag" src={post.image} alt="image not found" />
        </div>
        <div className="dis-text">
           
          <h1 className="col-gree"> {post.Title} </h1>
          <h3>{post.price} </h3>
          <p className="color-red"> 7 sold in last 18 hours</p>
          <span>Size : 1 Box</span> <br/>
          <p className="para-incr ">
            <button onClick={decrement} className="btn-dec"> - </button>
            <span className="incr-dec"> {main} KG </span>
            <button onClick={increment} className="btn-dec"> + </button>
          </p>
          <p className="sub">Subtotal:{dataofprice*main} </p>
          
          <Link className="buttonn buy-now" to={`/Post/ReadPost/${id}`}>
          Buy Now
        </Link> <br/><br/><br/>
        <span>15 customers are viewing this produc</span> <br/><br/><br/><br/>
        <img src="https://fpsstore.in/cdn/shop/files/trust_800x-compressor_800x.png?v=1637822740" /> <br/><br/><br/><br/>
        </div>
      </div>
      
      <Footer/>
    </>
  );
}

export default ReadPost;
