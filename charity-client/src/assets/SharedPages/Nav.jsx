import React from 'react';
import { Link, NavLink } from 'react-router';

const Nav = () => {
   const list = (
  <div className="flex items-center gap-3 font-medium text-lg">
    <NavLink
      to="/dashboard"
      end
      className={({ isActive }) =>
        isActive ? 'text-[#e48061]' : 'text-gray-800 hover:text-[#e48061] transition duration-200'
      }
    >
      Dashboard
    </NavLink>
    <NavLink
      to="/dashboard/leaderboard"
      className={({ isActive }) =>
        isActive ? 'text-[#e48061]' : 'text-gray-800 hover:text-[#e48061] transition duration-200'
      }
    >
      Leader Board
    </NavLink>
  </div>
);


    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {list}
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl"><span className='text-[#e48061]'>She </span> Can</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end flex gap-2 items-center">
  <Link to='/'><a className="btn bg-[#e48061] text-white">Log Out</a></Link>
  
  </div>
</div>
    );
};

export default Nav;