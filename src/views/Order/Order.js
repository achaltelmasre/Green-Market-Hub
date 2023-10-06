import React from "react";
import Post from "./Posts/Post";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faTruckFast, faShop, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import ReadPost from "./ReadPost/ReadPost";
import PreviewPostCard from "../../components/PreviewPostCard/PreviewPostCard";
import FruitcardAdd from './FruitcardAdd/FruitcardAdd';
import  Navbar  from "./../../components/Navbar/Navbar";
import Footer from './../../components/Footer/Footer';
import "./Order.css";

function Order(){
    return(
        <>
           < Navbar/>  
              
             <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://fpsstore.in/cdn/shop/files/8_e3ca2669-39cf-4973-be3a-0f367bece4ea.png?v=1695034974" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://fpsstore.in/cdn/shop/files/FPS_Sliders.png?v=1695034974" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="https://fpsstore.in/cdn/shop/files/11.png?v=1695034974" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

     <div>
      <div  className=" disp-flex" >
        <p><FontAwesomeIcon icon={faTruckFast} /> FREE HOME DELIVERY</p>
        <p>|</p>
        <p><FontAwesomeIcon icon={faBagShopping} /> QUALITY UNMATCHED</p>
        <p>|</p>
        <p><FontAwesomeIcon icon={faCheck} />  ZERO CONTACT DELIVERY </p>
        <p>|</p>
        <p> <FontAwesomeIcon icon={faShop} />PICKUP FROM STORE</p>
      </div>
     </div>

     <FruitcardAdd/>

     
        {/* <img className="image-poster1" src="https://fpsstore.in/cdn/shop/files/8_e3ca2669-39cf-4973-be3a-0f367bece4ea.png?v=1695034974" alt="poster image" />  */}
        
           <Post/>
           {/* <PreviewPostCard/> */}

           <Footer/>
        </>
    )
}
 export default Order;