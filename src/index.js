import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Home from "./views/Home/Home"
import About from "./views/About/About"
import Order from "./views/Order/Order";
import Review from "./views/Review/Review"; 

import Contact from "./views/Contact/Constact";
import ReadPost from "./views/Order/ReadPost/ReadPost";
=======
import Contact from "./views/Contact/Contact";



const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Order />,
  },
  {
    path:"/review",
    element: <Review/>,
  },
  {
    path:"/contact",
    element: <Contact/>,
  },
  // {
  //   path: '/Post/ReadPost/:id',
  //   element: <ReadPost/>
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />)