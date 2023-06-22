
// import React from 'react';
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { getAuth } from "firebase/auth";
import app from "../../../Firebase/firebase.config";
import useCart from "../../../hooks/useCart";
import { GrCheckboxSelected } from 'react-icons/gr';





const Navbar = () => {

  const { user, logOut, loading } = useContext(AuthContext);
  const [cart] = useCart();
  if (loading) {
    return <div className="bg-black lg:p-80 p-40">

      <div className="radial-progress text-cyan-600" style={{ "--value": 80 }}>Loading_________________80%</div>

    </div>
  }
  const auth = getAuth(app);

  const navItems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/instructor">Instructors</Link></li>
    <li><Link to="/classes">Classes</Link></li>
   
    {user &&
      <li><Link to="/dashboard/mycart">Dashboard</Link></li>
    }
 <li>
      <Link>
        <button className="btn btn-sm bg-blue-300 text-black">
          <GrCheckboxSelected ></GrCheckboxSelected>
          <div className="badge badge-blue-400 ml-1 p-3"> +{cart?.length || 0}</div>
        </button>
      </Link>
    </li>

  </>
  const handleLogOut = () => {
    logOut(auth)
      .then(result => { result })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="navbar bg-black text-white  h-24">
      <div className="navbar-start">
        <div className="dropdown text-blue-400">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>

          <ul tabIndex={0} className="menu menu-compact text-blue-300 dropdown-content mt-3 p-2 shadow bg-black  rounded-box w-52">
            {navItems}
            <li><a></a></li>
          </ul>

        </div>

        <div>
          <Link to="/" className=" text-xl"><img className=" h-20 w-20 rounded-full" src="https://cdn-icons-png.flaticon.com/512/3456/3456464.png" alt="" /></Link>
        </div>
        <h2 className="font-black ps-2 text-3xl text-blue-300">Yoga-Delight</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">

        {user ?

          <span className="flex">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                <img src={user.photoURL} alt="" />
                <p>{user.displayName}</p>
              </div>
            </div>

            <div className="ps-4 mt-2">
              <button onClick={handleLogOut} className="btn btn-outline text-blue-300">Sign Out</button>
            </div>

          </span>

          :

          <span className="flex">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                <img src="https://i.ibb.co/N2YPWBc/images-1.png" alt="" />
              </div>
            </div>

            <div className="ps-4 mt-2">
              <Link to="/login">  <button className="btn btn-outline text-blue-300 ">Sign In</button></Link>
            </div>

          </span>
        }

{/*  */}
{/*  */}
{/*  */}
{/*  */}

      </div>
    </div>
  );
};

export default Navbar;