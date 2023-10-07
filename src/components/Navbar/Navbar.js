import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from  "./../../views/Home/img/logo.png"

 const Navbar = ()=>
{ 
  return (
    <nav class="navbar navbar-expand-lg fs-4 nav1 ">
  <div class="container-fluid back-remo">
    <a class="navbar-brand" href="#"> <img src={logo} alt="logo" height="80px"/> <span className="fs-2">GREEN HUB</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-lg-auto">
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover " aria-current="page" to="/" >Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover" aria-current="page" to="/about" >About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover" aria-current="page" to="/order" >Order</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover" aria-current="page" to="/review" >Review</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover" aria-current="page" to="/contact" >Contact</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active ms-5 hover" aria-current="page" to="/contact" >Login</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
  );

};
export default Navbar;