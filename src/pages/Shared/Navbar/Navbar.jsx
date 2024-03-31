
import { useContext } from 'react';
import logo from '../../../assets/logo.svg';
import { AuthContext } from '../../../ContextProvider/ContextProvider';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext)

  const handelLogOut =()=>{
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
    const navItem = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        {user?.email ? (
          <>
            <li>
              <Link to={"/bookings"}>My Bookings</Link>
            </li>
            <li>
              <Link to={"/login"} onClick={handelLogOut}>
                Log Out
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Log In</Link>
            </li>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
          </>
        )}
      </>
    );

    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItem}
            </ul>
          </div>
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-accent">Appointment</button>
        </div>
      </div>
    );
};

export default Navbar;