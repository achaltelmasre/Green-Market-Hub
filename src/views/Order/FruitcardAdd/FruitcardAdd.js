import React, { useEffect } from "react";
import { useState } from "react";
import PreviewPostCard from "./../../../components/PreviewPostCard/PreviewPostCard";
import showToast from "crunchy-toast";
import { saveListToLocalStorage } from "./../../../components/Util/LocalStorage";
import "./FruitcardAdd.css";
import blogData from "./../../../configs/blogs-data.json";
import vegetableData from "./../../../configs/vegetable-data.json";

const Home = () => {
  const [card, setcard] = useState([
    {
      id: 7,
      Title: "Amrood (Guava)",
      image:
        "https://fpsstore.in/cdn/shop/products/green-guava-500x500_360x.png?v=1641460793",
      price: 60,
      delet: "100",
      grame: "398",
      Description: "this is my first blog",
      content: "this is my first blog",
      author: "ddffg",
    },
    {
      id: 8,
      Title: "Custard Apple",
      image:
        "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
      price: 180,
      delet: "200",
      grame: "398",
      Description: "this is my first blog",
      content: "this is my first blog",
      author: "qwe",
    },
    {
      id: 9,
      Title: "Custard Apple",
      image:
        "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
      price: 180,
      delet: "200",
      grame: "398",
      Description: "this is my first blog",
      content: "this is my first blog",
      author: "qwe",
    },
    {
      id: 10,
      Title: "Custard Apple",
      image:
        "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
      price: 180,
      delet: "200",
      grame: "398",
      Description: "this is my first blog",
      content: "this is my first blog",
      author: "qwe",
    },
    {
      id: 11,
      Title: "Custard Apple",
      image:
        "https://fpsstore.in/cdn/shop/products/CustardAppleGolden.jpg?v=1641812079",
      price: 180,
      delet: "200",
      grame: "398",
      Description: "this is my first blog",
      content: "this is my first blog",
      author: "qwe",
    },
  ]);

  const [contact, setContact] = useState(blogData,vegetableData);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm)
  const [id, setId] = useState(0);
  const [Title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState(" ");
  const [delet, setDelet] = useState(" ");
  const [priority, setPriority] = useState(" ");
  const [price, setPrice] = useState(" ");
  const [isEdit, setIsEdit] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [abhi, setAbhi] = useState(true);
  const [admin, setAdmin] = useState();




useEffect(() => {
  const filteredContact = (vegetableData,blogData).filter((item) => {
    const Title = item.Title.toLowerCase();
    const query = searchTerm.toLowerCase();
 
    return Title.includes(query);
  });
  
  setContact(filteredContact);
  console.log(filteredContact);
  // console.log(searchTerm);
}, [searchTerm, PreviewPostCard]);



  const clearInputFields = () => {
    setTitle("");
    setImage("");
    setDescription("");
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

    if (!image) {
      showToast("image URL is required!", "alert", 3000);
      return false;
    }

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

  const zzzzzzz = () => {
    if (abhi === true) {
      setAbhi(false);
    } else {
      setAbhi(true);
    }
  };

  function admindata() {
    if (admin == 9373700515 || admin == 9373700516 || admin == { price }) {
      console.log("hi");
      <h1>hello</h1>;
      setAdmin(true);
      showToast("Successfull your login Admin ", "success", 3000);
    } else {
      <h1>by by</h1>;
      console.log("by");
      setAdmin(false);

      showToast(
        "Alert! Your login ID is wrong please try again",
        "alert",
        6000
      );
    }
  }

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("card"));

    if (list && list.length >= 0) {
      setcard(list);
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="dive-flex ">
          <input
            type="text"
            className="input panel"
            placeholder="enter your ID"
            onChange={(event) => {
              setAdmin(event.target.value);
            }}
          />
          <button className="btn-panel" onClick={admindata}>
            Login Admin{" "}
          </button>
        </div>

        {admin == true ? (
          <div className="app-flex">
            <div>
              <h3 className="text-center">Slow Product List</h3>
              <div className="tasks-container">
                {card.map((cards, index) => {
                  const {
                    id,
                    Title,
                    description,
                    priority,
                    delet,
                    price,
                    image,
                  } = cards;

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
                <div className="add-task-from-container"></div>
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
            </div>
          </div>
        ) : (
          <h2 className="false-value col-green">
           
          </h2>
        )}
       
      </div>

      <img
        className="image-poster1"
        src="https://fpsstore.in/cdn/shop/files/FPS_Whatsapp_1920x.png?v=1691732659"
        alt="poster image"
      />

<div className="container">
        {/* Your JSX code... */}
      </div>

      {/* <h1 className="heading">Search App</h1> */}
      <div className="text-center">
      <input
        type="text"
        placeholder="search product"
        className="search-input"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      </div>
     <div className="container-main">
          {contact.map((contact, index) => {
            const { Title, price , image} = contact;
            return <PreviewPostCard key={index} Title={Title} price={price} image={image}/>
          })}
        </div>

      <p>
        <div className="cont-btn-show">
          <button
            class="btn btn-showmore "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            vegetable
          </button>
          <button
            class="btn btn-showmore"
            type="bu0tton"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample1"
            aria-expanded="true"
            aria-controls="collapseExample1"
          >
            Fruits
          </button>
        </div>
      </p>
      <div class="collapse" id="collapseExample">
        <div className="container-main">
          {vegetableData.map((Post, index) => (
            <PreviewPostCard
              key={index}
              id={Post.id}
              image={Post.image}
              Title={Post.Title}
              delet={Post.delet}
              price={Post.price}
            />
          ))}
        </div>
      </div>

      <div class="collapse" id="collapseExample1">
        <div className="container-main">
          {blogData.map((Post, index) => (
            <PreviewPostCard
              key={index}
              id={Post.id}
              image={Post.image}
              Title={Post.Title}
              delet={Post.delet}
              price={Post.price}
            />
          ))}
        </div>
      </div>
      <div className="container-main">
        {card.map((cards, index) => {
          const { id, Title, description, priority, delet, price, image } =
            cards;

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
