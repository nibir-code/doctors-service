import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
     const menuItems = <>
     <li><Link className='text-red-600 font-bold' to="/">Home</Link></li>
     <li><Link className='text-yellow-600 font-bold' to="/about">About</Link></li>
     <li><Link className='text-lime-600 font-bold' to="/appointment">Appointment</Link></li>
     <li><Link className='text-blue-600 font-bold' to="/review">Reviews</Link></li>
     <li><Link className='text-emerald-600 font-bold' to="/contact">Contact Us</Link></li>
     <li><Link className='text-sky-600 font-bold' to="/login">Login</Link></li>
     </>
     return (
          <div className ="px-12 ">
          <div 
          className="navbar bg-base-100 ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
               {menuItems}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 font-bold text-3xl ">Doctor's Service</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {menuItems}
            </ul>
          </div>
        </div>
          </div>
     );
};

export default Navbar;