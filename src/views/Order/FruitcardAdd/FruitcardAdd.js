import React, { useEffect } from "react";
import { useState } from "react";
import PreviewPostCard from "./../../../components/PreviewPostCard/PreviewPostCard";
import showToast from "crunchy-toast";
import { saveListToLocalStorage } from "./../../../components/Util/LocalStorage";
import "./FruitcardAdd.css";
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons";
import blogData from "./../../../configs/blogs-data.json";
import vegetableData from "./../../../configs/vegetable-data.json";


const Home = () => {
  const [card, setcard] = useState([
    
  ]);
  const [id, setId] = useState(0);
  const [Title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const [description, setDescription] = useState(" ");
  const [delet, setDelet] = useState(" ");
  const [priority, setPriority] = useState(" ");
  const [price, setPrice] = useState(" ");
  // const [priority, setPriority] = useState(" ");
  // const [priority, setPriority] = useState(" ");
  const [isEdit, setIsEdit] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [abhi,setAbhi]=useState(true)
  // const loadListFromLocalStorage = () =>{
  //     const list = JSON.parse(localStorage.getItem('mahamart'))
  // }
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("card"));

    if (list && list.length >= 0) {
      setcard(list);
    }
  }, []);

  // const saveListToLocalStorage = (tasks) => {
  //     localStorage.setItem("mahamart", JSON.stringify(tasks));
  // };

  const clearInputFields = () => {
    setTitle("");
    setImage("");
    setDescription("");
    // setPriority("");
    setDelet("");
    setPrice("");
  };

  const findTaskndexById = (taskId) => {
    let index;
    card.forEach((PreviewPostCard, i) => {
      if (PreviewPostCard.id === taskId) {
        index = i;
      }
    });
    return index;
  };

  const checkRequiredFields = () => {
    if (!Title) {
      showToast("Title is required!", "alert", 3000);
      return false;
    }

    // if (!description) {
    //   showToast("Description is required!", "alert", 3000);
    //   return false;
    // }

    if (!image) {
      showToast("image URL is required!", "alert", 3000);
      return false;
    }

    // if (!priority) {
    //   showToast("Priority is required!", "alert", 3000);
    //   return false;
    // }

    if (!delet) {
      showToast("offer price is required!", "alert", 3000);
      return false;
    }

    if (!price) {
      showToast("currunt price is required!", "alert", 3000);
      return false;
    }

    return true;
  };

  const addTaskTolist = () => {
    if (checkRequiredFields() === false) {
      return;
    }
    const randomId = Math.floor(Math.random() * 500);
    const obj = {
      id: randomId,
      Title: Title,
      description: description,
      priority: priority,
      delet: delet,
      price: price,
      image: image,
    };

    const newCard = [...card, obj];

    setcard(newCard);
   
    clearInputFields();

    saveListToLocalStorage(newCard);
    showToast("Task added successfully!", "success", 3000);
  };

  // delet
  const removeTaskfromList = (obj) => {
    const index = card.indexOf(obj);

    const tempArray = card;
    tempArray.splice(index, 1);

    setcard([...tempArray]);





    saveListToLocalStorage(tempArray);
    showToast("Task deledet successfully!", "alert", 3000);
  };

  const setTaskEditable = (id) => {
    setIsEdit(true);
    setId(id);
   

    const index = findTaskndexById(id);
    const currentEditTask = card[index];

    setTitle(currentEditTask.Title);
    setDescription(currentEditTask.description);
    setPriority(currentEditTask.priority);
    setDelet(currentEditTask.delet);
    setPrice(currentEditTask.price);
    setImage(currentEditTask.image);
   
  };

  const updateTask = () => {
    let indexToUpdate;
    card.forEach((PreviewPostCard, i) => {
      if (PreviewPostCard.id === id) {
        indexToUpdate = i;
      }
    });

   
    const tempArray = card;
    tempArray[indexToUpdate] = {
      id: id,
      Title: Title,
      description: description,
      priority: priority,
      delet: delet,
      price: price,
      image: image,
    };

    setcard([...tempArray]);
    saveListToLocalStorage(tempArray);
    setId(0);
    setTitle("");
    setDescription("");
    setPriority("");
    setDelet("");
    setPrice("");
    setImage("");

    setIsEdit(false);
    showToast("Task updated successfully!", "info", 3000);
  };
  const zzzzzzz=()=>{
    if(abhi===true){
      setAbhi(false)
    }
    else{
      setAbhi(true)
    }
  }

  return (
    <>
   
    <div className="container">
      {hidden ? 
   
      <div className="app-flex">
        <div>
          <h3 className="text-center">Slow Product List</h3>
          <div className="tasks-container">
            {card.map((card, index) => {
              const { id, Title, description, priority ,delet,price,image} = card;

              return (
                <PreviewPostCard
                  id={id}
                  image={image}
                  Title={Title}
                  description={description}
                  priority={priority}
                  delet={delet}
                  price={price}
                  key={index}
                  removeTaskfromList={removeTaskfromList}
                  obj={card}
                  setTaskEditable={setTaskEditable}
                />
              );
            })}
          </div>
        </div>

        <div>
          <div className="push-card">
            <h3 className="text-center col-green">
              {isEdit ? `Update Product  🖊️` : `Add Product +`}
            </h3>
            <div className="add-task-from-container">
           
            </div>
            <form>
              <input
                type="text"
                className="input"
                placeholder="enter title"
                value={Title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />{" "}
              <br></br>
              <input
                type="text"
                className="input"
                placeholder="enter image URL"
                value={image}
                onChange={(event) => {
                  setImage(event.target.value);
                }}
              />
              <br></br>
              <input
                type="text"
                className="input"
                placeholder="enter offer price"
                value={delet}
                onChange={(event) => {
                  setDelet(event.target.value);
                }}
              />
              <br></br>
              <input
                type="text"
                className="input"
                placeholder="enter currunt price"
                value={price}
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
              <br></br>
             
              <div className="d-flex">
                <button
                  type="button"
                  className=" input btn"
                  onClick={() => {
                    isEdit ? updateTask() : addTaskTolist();
                  }}
                >
                  {isEdit ? "Update" : "Creat"}
                </button>
              </div>
            </form>
          </div>
          <button className="btn-close" onClick={()=>{setHidden(false)}}></button>
        </div>
      </div>:  <button className="btn-add" onClick={()=>{setHidden(true)}}>Add Product</button>}
        
    </div>

    <img className="image-poster1" src="https://fpsstore.in/cdn/shop/files/FPS_Whatsapp_1920x.png?v=1691732659" alt="poster image" />
    <div className="container-main"> 

    {/* {

       abhi ? blogData.map((Post, index)=>(
             <PreviewPostCard key={index} id={Post.id}  image={Post.image} Title={Post.Title} delet={Post.delet} price={Post.price}  />   
        )) 
      :null
        
    }
  <button onClick={zzzzzzz}>fff</button> */}

{/* {
        vegetableData.map((Post, index)=>(
          
          
         <PreviewPostCard key={index} id={Post.id}  image={Post.image} Title={Post.Title} delet={Post.delet} price={Post.price}  />
       
          
        ))
    } */}

    
    
    

     
            </div>

            <p>
  <div className="cont-btn-show">
  <button class="btn btn-showmore " type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
   vegetable
  </button>
  <button class="btn btn-showmore" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="true" aria-controls="collapseExample1">
   Fruits
  </button>
  </div>
</p>
<div class="collapse" id="collapseExample">
  <div className="container-main">
  {
        vegetableData.map((Post, index)=>(
          
          
         <PreviewPostCard key={index} id={Post.id}  image={Post.image} Title={Post.Title} delet={Post.delet} price={Post.price}  />
       
          
        ))
    }
  </div>
</div>

<div class="collapse" id="collapseExample1">
  <div className="container-main">
  {

 blogData.map((Post, index)=>(
      <PreviewPostCard key={index} id={Post.id}  image={Post.image} Title={Post.Title} delet={Post.delet} price={Post.price}  />   
 )) 

 
}
  </div>
</div>
<div className="container-main">
{card.map((card, index) => {
              const { id, Title, description, priority ,delet,price,image} = card;

              return (
                <PreviewPostCard
                  id={id}
                  image={image}
                  Title={Title}
                  description={description}
                  priority={priority}
                  delet={delet}
                  price={price}
                  key={index}
                 
                  obj={card}
                  
                />
              );
            })}
         </div> 
    </> 
  );
};

export default Home;
