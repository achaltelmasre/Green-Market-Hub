import React from "react";
import { useState,useEffect } from "react";
import blogData from "./../../../configs/blogs-data.json";
import "./Post.css";
import PreviewPostCard from "./../../../components/PreviewPostCard/PreviewPostCard";
import FruitcardAdd  from "./../FruitcardAdd/FruitcardAdd";


function Post({id,
  image,
  Title,
  author,
  Description,
  price,
  delet, removeTaskfromList, obj, setTaskEditable,index,priority}) {

  //   const [card, setcard] = useState([]);

  return (
    <>
    <div>
      {/* <h1 className="text-cen"> Card </h1> */}
      <div className="container-main"> 
    {/* {
        blogData.map((Post, index)=>(
          
          
         <PreviewPostCard key={index} id={Post.id}  image={Post.image} Title={Post.Title} delet={Post.delet} price={Post.price}  />
       
          
        ))
    } */}

// {/* <div className="tasks-container">
//             {card.map((card, index) => {
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
//           </div> */}
    </div>
    </div>
    {/* <PreviewPostCard
                  id={id}
                  image={image}
                  Title={Title}
                  description={Description}
                  priority={priority}
                  delet={delet}
                  price={price}
                  key={index}
                  removeTaskfromList={removeTaskfromList}
                  obj={obj}
                  setTaskEditable={setTaskEditable}
                /> */}
    </>
  );
}

export default Post;
