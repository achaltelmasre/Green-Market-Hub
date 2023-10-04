import React from "react";

import blogData from "./../../../configs/blogs-data.json";
import "./Post.css";
import PreviewPostCard from "./../../../components/PreviewPostCard/PreviewPostCard";


function Post() {
  return (
    <>
    <div>
      {/* <h1 className="text-cen"> Card </h1> */}
      <div className="container-main"> 
    {
        blogData.map((Post, index)=>(
          
          
         <PreviewPostCard key={index} id={Post.id}  image={Post.image} Title={Post.Title} delet={Post.delet} price={Post.price}  />


        ))
    }
    </div>
    </div>
    </>
  );
}

export default Post;
