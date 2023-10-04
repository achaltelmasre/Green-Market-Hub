import React, { useEffect } from "react";
import { useState } from "react";
import PreviewPostCard from "./../../../components/PreviewPostCard/PreviewPostCard";
import showToast from "crunchy-toast";
import { saveListToLocalStorage } from "./../../../components/Util/LocalStorage";
import "./FruitcardAdd.css";
import { faCircleRadiation } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [card, setcard] = useState([
    // {
    //   id: 1,
    //   title: "Boat Airdopes 190",
    //   description: "this product is use to easy",
    //   priority: "NEW",
    // },
    // {
    //     id:2,
    //     title:'Books',
    //     description:'Subject Wise Solved Papers',
    //     priority:'NEW'
    // },
    // {
    //     id:3,
    //     title:'Cheair',
    //     description:'this product is very good',
    //     priority:'OLD'
    // },
    // {
    //     id:4,
    //     title:'Mobile Phone',
    //     description:'LAVA Blase 5G 8GB Ram, 128GB Storage',
    //     priority:'OLD'
    // }
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
    // setTitle("");
    // setDescription("");
    // setPriority("");
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
    // let currentEditTask;

    // card.forEach((task) => {
    //     if (task.id === id) {
    //         currentEditTask = task;
    //     }
    // })

    const index = findTaskndexById(id);
    const currentEditTask = card[index];

    setTitle(currentEditTask.Title);
    setDescription(currentEditTask.description);
    setPriority(currentEditTask.priority);
    setDelet(currentEditTask.delet);
    setPrice(currentEditTask.price);
    setImage(currentEditTask.image);
    //    setTitle(currentEditTask.title);
  };

  const updateTask = () => {
    let indexToUpdate;
    card.forEach((PreviewPostCard, i) => {
      if (PreviewPostCard.id === id) {
        indexToUpdate = i;
      }
    });

    // if(checkRequiredFields() === false){
    //   return;
    // }
    // const indexToUpdate = findTaskndexById(id);
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

  return (
    <div className="container">
      {/* <div className="navbar-card">
        <h1 className="app-name">
          {""}
          ShopNest <i class="fa-solid fa-cart-shopping "></i>
        </h1>

        <p className="card-nav margin-start">HOME</p>

        <p className="card-nav">ABOUT</p>
        <p className="card-nav">CONTACT</p>
      </div> */}

      <div className="app-flex">
        <div>
          <h3 className="text-center">Slow Product List</h3>
          <div className="tasks-container">
            {card.map((card, index) => {
              const { id, Title, description, priority ,delet,price} = card;

              return (
                <PreviewPostCard
                  id={id}
                  image={image}
                  Title={Title}
                  description={description}
                  priority={priority}
                  delet={delet}
                  price={price}
                  // image={image}
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
            <h3 className="text-center">
              {isEdit ? `Update task ${id} 🖊️` : `Add Task +`}
            </h3>
            <div className="add-task-from-container">
              {/* <h3>show me title: {title} </h3> */}
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
              {/* <div className="d-flex">
                                {isEdit ? (
                                    <button
                                        type="button"
                                        className=" input btn"
                                        onClick={updateTask}
                                    >
                                        Update
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        className="input btn"
                                        onClick={addTaskTolist}
                                    >
                                        Creat
                                    </button>
                                )}
                            </div> */}
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
        </div>
      </div>
      {/* <div className="footer">
        <h4 className="foot-card">
          Devlope By{" "}
          <a className="git-footer" href="https://github.com/Abhijeetkokat007 ">
            @abhijeetkokat007<i class="fa-brands fa-github"></i>
          </a>{" "}
        </h4>
      </div> */}
    </div>
  );
};

export default Home;
