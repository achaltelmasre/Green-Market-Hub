import React from "react";
import "./LoginForm.css"
import "./../../../views/SignUp/SignUp.css";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useState } from "react";
// import { toast } from "react-toastify";
import showToast from 'crunchy-toast';

export default function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
// getting password and email 
  const userEmail = localStorage.getItem('email');
  const userPassword = localStorage.getItem('password');

  const HandleSubmit = (e) => {
    e.preventDefault();
    if(!email)
    {
     showToast('Enter Email', 'alert', 3000);
 
    }
    if (!password) {
      showToast('Enter Password', 'alert', 3000);
 
    }
    else {
    showToast('LogIn Successfully', 'success', 3000);
  localStorage.setItem('email', email) ;
  localStorage.setItem('password',password) ;
}

  };

  return (
    <>
      < Navbar />
      
      <div className="signup-form">
        <form class="row g-3 login-form">

          <div class="col-md-12">
            <label for="inputEmail4" class="form-label m-2">Email</label>
            <input type="email" class="form-control " id="inputEmail4"
            value={email}
            onChange = {(e) => {
              setEmail(e.target.value)} 
            }/>
          </div>
          <div class="col-md-12">
            <label for="inputPassword4" class="form-label m-2 ">Password</label>
            <input type="password" class="form-control login-input" id="inputPassword4 "
             value={password}
             onChange = {(e) => {
               setPassword(e.target.value)} 
              } />
          </div>


          <div class="col-12">
            <button type="submit" class="btn btn-signup btn-login" 
            onClick={HandleSubmit} > LogIn </button>
              <hr />
            Don't have an account ? <Link to="/signup">SignUp</Link>
          </div>
        </form>
      </div>
    </>
  );
}