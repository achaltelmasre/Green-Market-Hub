import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./views/Home/Home"
import About from "./views/About/About"
import Order from "./views/Oder/Order";
import Review from "./views/Review/Review"; 
import Contact from "./views/Contact/Constact";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path:"/review",
    element: <Review/>,
  },
  {
    path:"/contact",
    element: <Contact/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);