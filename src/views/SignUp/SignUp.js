import React from "react";
import "./SignUp.css"
import Navbar from "../../components/Navbar/Navbar";
import { Link, json } from "react-router-dom";
import { useState } from "react";
import showToast from 'crunchy-toast';

export default function SignUp() {

  const [userData , setUserData] = useState([]);
  const [email, setEmail]= useState('')
  const [mobileNo, setMobileNo]= useState('')
  const [password, setPassword]= useState('')
  const [username, setUsername]= useState('')
  const [checked, setChecked]= useState('')
  const [city, setCity]= useState('')
  const [select, setSelect]= useState('')
  const [pincode, setPincode]= useState('')
 
  
  const HandleSingUp = (e) => {
    // e.preventDefault(); 
    if(!email)
    {
     showToast('Enter Email', 'alert', 3000);
 
    }
    else if (!password) {
      showToast('Enter Password', 'alert', 3000);
 
    }
    else if (!username) {
      showToast('Enter UserName', 'alert', 3000);
 
    }
    else if (!select) {
      showToast('Select State', 'alert', 3000);
 
    }
    else if (!mobileNo) {
      showToast('Enter mobile no', 'alert', 3000);
 
    }
    else if (!city) {
      showToast('Enter City', 'alert', 3000);
 
    }
    else if (!pincode) {
      showToast('Enter pincode', 'alert', 3000);
 
    }
    
    else {
    showToast('SignUp Successfully', 'success', 3000);
    
    const obj = {
      email : email,
      password : password ,
      username : username,
      mobileNo : mobileNo,
      city : city ,
      select : select ,
      pincode : pincode ,
      checked : checked
    }
    
    const temparr =[...userData,obj] ;
    setUserData(temparr);
    localStorage.setItem('userdata',JSON.stringify(obj));

  }
  };

  return (
    <>
      < Navbar />
      <div className="signup-form">
        {/* <h2 className="text-center text-light pt-3">SignUp Form</h2> */}
        <form class="row g-3  m-2">
          <div class="col-12">
            <label for="inputAddress" class="form-label ms-2">UserName</label>
            <input type="text" class="form-control" id="inputAddress" 
             value={username}
             onChange = {(e) => {
               setUsername(e.target.value)} 
             }/>
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label  ms-2">Mobile No.</label>
            <input type="text" class="form-control" id="inputAddress2"
             value={mobileNo}
             onChange = {(e) => {
               setMobileNo(e.target.value)} 
             } />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label  ms-2">Email</label>
            <input type="email" class="form-control " id="inputEmail4"
             value={email}
             onChange = {(e) => {
               setEmail(e.target.value)} 
             } />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label  ms-2">Password</label>
            <input type="password" class="form-control" id="inputPassword4 " 
             value={password}
             onChange = {(e) => {
               setPassword(e.target.value)} 
             }/>
          </div>

          <div class="col-md-6">
            <label for="inputCity" class="form-label  ms-2">City</label>
            <input type="text" class="form-control" id="inputCity" 
             value={city}
             onChange = {(e) => {
               setCity(e.target.value)} 
             }/>
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label  ms-2">State</label>
            <select id="inputState" class="form-select form-control"
             value={select}
             onChange = {(e) => {
               setSelect(e.target.value)} 
             }>
              <option selected>Choose...</option>
              <option>Asam</option>
              <option>Uttar Pradesh</option>
              <option>Maharashtra</option>
              <option>Gujrat</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label ms-2">Zip</label>
            <input type="text" class="form-control" id="inputZip" 
             value={pincode}
             onChange = {(e) => {
               setPincode(e.target.value)} 
             }/>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input " type="checkbox" id="gridCheck" 
               checked={checked}
               onChange = {(e) => {
                 setChecked(e.target.value)} 
               } />
              <label class="form-check-label " for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div class="col-12">
             <button type="button" class="btn btn-signup"
              onClick={HandleSingUp} >SignUp</button> 
              <hr />

            Already have an account ? <Link to="/login">LogIn</Link>
          </div>
        </form>
      </div>
    </>
  );
}