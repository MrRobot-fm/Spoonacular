import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { IoHomeOutline, IoReorderThreeOutline } from 'react-icons/io5';
import { useGlobalContext } from '../../context';
import './navbar.css';

const Navbar = () => {
  const { nav, setNav } = useGlobalContext();
  const handleNav = () => {
    setNav(!nav);
  };

  const location = useLocation();

  return (
    <nav className="nav w-full h-[11vh] flex border-b-2 shadow-md ">
      <div className="w-full flex justify-between items-center px-4 ">
        <div className="p-4 ">
          <span className="text-2xl text-emerald-500 font-medium">
            Spoonacular API
          </span>
        </div>
        <div className="hidden md:flex ">
          <ul className="flex text-gray-700  items-center text-lg">
            {location.pathname !== '/' && (
              <li className="p-4 hover:text-gray-500">
                <Link to="/">Back home</Link>
              </li>
            )}
            {location.pathname !== '/search' && (
              <li className="p-4 hover:text-gray-500">
                <Link to="search">Search</Link>
              </li>
            )}
            {location.pathname !== '/contact' && (
              <li className="p-4 hover:text-gray-500">
                <Link to="contact">Contact me</Link>
              </li>
            )}
            <li className="p-4 hover:text-gray-500">
              <a href="https://spoonacular.com/food-api" target="blank">
                About API
              </a>
            </li>
          </ul>
        </div>
        <div className="icons flex p-2 justify-center items-center gap-2 md:hidden ">
          {location.pathname !== '/' && (
            <Link to="/">
              <IoHomeOutline className="text-[1.8rem] text-gray-500 " />
            </Link>
          )}

          {/* Hamburger menù */}
          <button onClick={handleNav}>
            <IoReorderThreeOutline className="text-[2.5rem] text-gray-500" />
          </button>
        </div>

        <div
          className={
            nav
              ? 'drop-down w-full bg-stone-50 z-50 absolute text-gray-700 rounded-b-3xl top-[70px] left-0 flex justify-center text-center md:hidden ease-in duration-500 opacity-100'
              : 'drop-down-close absolute left-[-100%] top-[70px]  ease-in duration-300 opacity-0'
          }
        >
          <ul className="p-4">
            {location.pathname !== '/search' && (
              <li className="text-2xl cursor-pointer pb-6">
                <Link to="search">Search</Link>
              </li>
            )}
            <li className="text-2xl cursor-pointer pb-6">
              <a href="https://spoonacular.com/food-api" target="blank">
                About API
              </a>
            </li>
            {location.pathname !== '/contact' && (
              <li className="text-2xl cursor-pointer pb-6">
                <Link to="contact">Contact me</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
