import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex justify-center p-5 font-bold mb-5 h-16 bg-lime-300 fixed top-0 left-0 right-0">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? " mr-5 border-b-4 border-indigo-500"
            : "hover:text-orange-600 mr-5 hover:border-b-4 border-indigo-500"
        }
      >
        HOME
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) =>
          isActive
            ? " mr-5 border-b-4 border-indigo-500"
            : "hover:text-orange-600 mr-5 hover:border-b-4 border-indigo-500"
        }
      >
        REVIEWS
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "border-b-4 border-indigo-500 mr-5"
            : "hover:text-orange-600 mr-5 hover:border-b-4 border-indigo-500"
        }
      >
        DASHBOARD
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) =>
          isActive
            ? "border-b-4 border-indigo-500 mr-5"
            : "hover:text-orange-600 mr-5 hover:border-b-4 border-indigo-500"
        }
      >
        BLOGS
      </NavLink>
      {/* <Link to='/about' className='mr-5 hover:text-orange-600 hover:border-b-4 border-indigo-500'>ABOUT</Link> */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "border-b-4 border-indigo-500"
            : "hover:text-orange-600 hover:border-b-4 border-indigo-500"
        }
      >
        ABOUT
      </NavLink>
    </nav>
  );
}
