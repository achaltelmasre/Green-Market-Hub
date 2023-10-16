import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from  "./../../views/Home/img/logo.png"

 const Navbar = ()=>

//  const user = parseInt(localStorage.getItem('currentuser'))
 
{ 
  return (
    <nav class="navbar navbar-expand-lg fs-4 nav1 bg-light">
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"> <img src={logo} alt="logo" height="80px"/> <span className="fs-2 text-green">GREEN</span> <span className="fs-2 text-red"> HUB</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse back-remo" id="navbarNav">
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
          <Link class="nav-link active ms-5 hover" aria-current="page" to="/signup" >SignUp</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>
  );

};
export default Navbar;