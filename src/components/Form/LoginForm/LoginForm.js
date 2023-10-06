import React from "react";
import "./LoginForm.css"
import "./../../../views/SignUp/SignUp.css" ;
import { Link } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

export default function Login() {
    return ( 
        <>
        <Navbar/>
        <div className="signup-form">
        <form class="row g-3 login-form">
            
        <div class="col-md-12">
          <label for="inputEmail4" class="form-label m-2">Email</label>
          <input type="email" class="form-control " id="inputEmail4" />
        </div>
        <div class="col-md-12">
          <label for="inputPassword4" class="form-label m-2 ">Password</label>
          <input type="password" class="form-control login-input" id="inputPassword4 " />
        </div>
       
    
        
      
        <div class="col-12">
          <button type="submit" class="btn btn-signup btn-login">LogIn</button>  <hr/>

         Don't have an account ? <Link to="/signup">SignUp</Link>
        </div>
      </form>
      </div>
      </>
    );
}