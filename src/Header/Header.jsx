import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="mx-32 mb-11">
        <div className="flex   text-white align-middle justify-around  ">
          <div className="">
            <img src="health.png" alt="" className="   mx-16 w-72" />
          </div>
          <div className="">
            <ul className="flex my-7 ml-96 text-xl">
              <li>
              <NavLink 
                 to="/home"
                 className={({isActive}) =>
                 `font-bold cursor-pointer mx-10 ${isActive ?" text-red-600":" text-white"}`

             }
         >
          Home
          </NavLink>
          </li>
          <li>
              <NavLink 
                 to="/blogs"
                 className={({isActive}) =>
                 `font-bold cursor-pointer mx-10 ${isActive ?" text-red-600":" text-white"}`

             }
         >
          Blogs
          </NavLink>
          </li>

          <li>
              <NavLink 
                 to="contact"
                 className={({isActive}) =>
                 `font-bold cursor-pointer mx-10 ${isActive ?" text-red-600":" text-white"}`

             }
         >
          Contact Us
          </NavLink>
          </li>
              {/* <li className=" font-bold cursor-pointer mx-10">Home</li>
              <li className="font-bold cursor-pointer mx-10">About</li>
              <li className="font-bold cursor-pointer mx-10">Contact </li>
              <li className=" font-bold cursor-pointer mx-10">Blogs</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
