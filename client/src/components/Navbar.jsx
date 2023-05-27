import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/reducers/authReducers";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";

const Navbar = () => {
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setRotate(!rotate);
    setIsOpen(!isOpen);
  };

  const [rotate, setRotate] = useState(false);

  const selectOption = () => {
    setIsOpen(false);
  };

  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();
  const handleClose = () => setNav(!nav);

  const handleClickSearch = (i) => {
    navigate(`/search`);
  };
  const handleClickHome = (i) => {
    navigate(`/`);
  };

  const handleClickLogin = (i) => {
    navigate(`/Login`);
  };

  const handlelogout = () => {
    dispatch(logout());
  };

  return (
    <div className="sticky top-0 z-10 bg-transparent justify-between drop-shadow-lg px-16 py-3">
      <div className="flex justify-between items-center w-full text-white">
        <div className="w-20">
          <h1
            className="font-bold lg:text-4xl text-2xl text-subMain"
            onClick={() => handleClickHome(Navbar.i)}
          >
            NETPLIG
          </h1>
        </div>
        <div className="lg:text-lg">
          <ul className="hidden md:flex font-semibold gap-3 md:gap-5">
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <span
                to="home"
                smooth={true}
                duration={500}
                onClick={() => handleClickHome(Navbar.i)}
              >
                Home
              </span>
            </li>
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <span
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => handleClickSearch(Navbar.i)}
              >
                Search
              </span>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          {isLoggedIn ? (
            <ul className="flex gap-0">
              <h1>
                Welcome, {user && user.username ? user.username : "Guest"}
              </h1>
              <div className="relative">
                <button
                  className={`bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out ${
                    rotate ? "rotate-180" : ""
                  }`}
                  onClick={toggleDropdown}
                >
                  <span className="text-white">
                    <AiOutlineCaretDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute text-red-700 font-medium bg-white rounded-sm w-28 px-3 py-2 top-10 right-0 text-center">
                    <button
                      className="flex gap-2"
                      onClick={() => selectOption(handlelogout())}
                    >
                      <p className="pt-1 text-xl">
                        <VscSignOut />
                      </p>
                      <p>Log Out</p>
                    </button>
                  </div>
                )}
              </div>
            </ul>
          ) : (
            <ul className="flex gap-3">
              <button
                className="bg-red-600 rounded-sm font-bold px-4 py-1"
                onClick={() => handleClickLogin()}
              >
                login
              </button>
            </ul>
          )}
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5" />
          ) : (
            <AiOutlineClose className="w-5" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : " bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={() => handleClickHome(Navbar.i)}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={() => handleClickSearch(Navbar.i)}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Search
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <div>
            {isLoggedIn ? (
              <ul className="flex gap-0">
                <h1>
                  Welcome, {user && user.username ? user.username : "Guest"}
                </h1>
                <div className="relative">
                  <button
                    className={`bg-transparent text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center transform transition duration-300 ease-in-out ${
                      rotate ? "rotate-180" : ""
                    }`}
                    onClick={toggleDropdown}
                  >
                    <span className="text-white">
                      <AiOutlineCaretDown />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="absolute text-red-700 font-medium bg-white rounded-sm w-28 px-3 py-2 top-10 right-0 text-center">
                      <button
                        className="flex gap-2"
                        onClick={() => handlelogout}
                      >
                        <p className="pt-1 text-xl">
                          <VscSignOut />
                        </p>
                        <p>Log Out</p>
                      </button>
                    </div>
                  )}
                </div>
              </ul>
            ) : (
              <ul className="flex gap-3">
                <button
                  className="bg-red-600 rounded-sm px-2 py-1"
                  onClick={() => handleClickLogin()}
                >
                  login
                </button>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
