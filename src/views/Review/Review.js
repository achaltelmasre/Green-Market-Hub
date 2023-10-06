import "./Review.css"
import AddressForm  from "./../../components/Form/AddressForm"
import { useState } from "react";

function Review(){
  const [admin, setAdmin] = useState();
  console.log(admin)
  function admindata (){
    if(admin==9373700515 || admin==9373700516){
      console.log("hi");
     <h1>hello</h1>
     setAdmin(true)
    }
    else{
      <h1>by by</h1>
      console.log("by");
      setAdmin(false)

    }
  }
    return(
        <>
        <h1> {admin} </h1>
           <input
                type="text"
                className="input"
                placeholder="enter title"
                value={admin}
                onChange={(event) => {
                  setAdmin(event.target.value);
                }}
              />
              <button onClick={admindata}> admin</button>


              {(admin==true) ? <h1>sahi hai</h1> : <h1>Your login ID is wrong please try again</h1>}
        </>
    )
}
 export default Review;