
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";


const Main = () => {
    return (
      <div>
        <Navbar></Navbar>
        <Outlet>
          <Home></Home>
          <LogIn></LogIn>
          <SignUp></SignUp>
          <CheckOut></CheckOut>
        </Outlet>
        <Footer></Footer>
      </div>
    );
};

export default Main;