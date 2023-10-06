import React from "react";
import "./SignUp.css"
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function SignUp() {
    return ( 
        <>
        <Navbar/>
        <div className="signup-form">
         
        <form class="row g-3  m-4">
             <div class="col-12">
          <label for="inputAddress" class="form-label ms-2">UserName</label>
          <input type="text" class="form-control" id="inputAddress"  />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label  ms-2">Mobile No.</label>
          <input type="text" class="form-control" id="inputAddress2" />
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label  ms-2">Email</label>
          <input type="email" class="form-control " id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label  ms-2">Password</label>
          <input type="password" class="form-control" id="inputPassword4 " />
        </div>
       
        <div class="col-md-6">
          <label for="inputCity" class="form-label  ms-2">City</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label  ms-2">State</label>
          <select id="inputState" class="form-select form-control">
            <option selected>Choose...</option>
            <option>Asam</option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
            <option>Gujrat</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label ms-2">Pin Code</label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input " type="checkbox" id="gridCheck" />
            <label class="form-check-label " for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-signup">SignUp</button> <hr/>

           Already have an account ? <Link to="/login">LogIn</Link>
        </div>
      </form>
      </div>
      </>
    );
}