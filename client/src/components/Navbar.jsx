import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineCaretDown } from "react-icons/ai";
import { VscSignOut } from "react-icons/vsc";
import { getMe, logout } from "../redux/actions/authActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const { isLoggedIn, token, user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const toggleDropdown = () => {
    setRotate(!rotate);
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [rotate, setRotate] = useState(false);

  const selectOption = () => {
    setIsOpen(false);
  };

  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();

  const handleClickSearch = () => {
    navigate(`/search`);
    window.location.reload();
  };

  const handleClickHome = () => {
    navigate(`/`);
    window.location.reload();
  };

  const handleClickLogin = () => {
    navigate(`/Login`);
    window.location.reload();
  };

  useEffect(() => {
    if (isLoggedIn && token) {
      dispatch(getMe());
    }
  }, [dispatch, isLoggedIn, token]);

  return (
    <div
      className={`fixed w-full left-0 top-0 md:px-10 p-5 drop-shadow-lg z-10 
${sticky ? "bg-black text-white h-16 items-center" : "text-white"}`}
    >
      <div className="flex justify-between items-center w-full text-white">
        <div className="w-20">
          <h1
            className="font-bold lg:text-4xl text-2xl text-subMain cursor-pointer"
            onClick={handleClickHome}
          >
            NETPLIG
          </h1>
        </div>
        <div className="lg:text-lg">
          <ul className="hidden md:flex font-semibold gap-3 md:gap-5">
            <li className="nav-link">
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={handleClickHome}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                onClick={handleClickSearch}
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          {isLoggedIn ? (
            <ul className="flex gap-0 items-center">
              <h1 className="text-white">
                Welcome, {user && user.name ? user.name : "Guest"}
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
                      onClick={() => dispatch(logout(navigate))}
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
                onClick={handleClickLogin}
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
      <ul
        className={!nav ? "hidden" : " bg-black w-full text-center text-white"}
      >
        <li className="border-b-2 border-zinc-300 py-3 w-full hover:text-subMain">
          <Link onClick={handleClickHome} smooth={true} duration={500} classna>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full py-3 hover:text-subMain">
          <Link
            onClick={handleClickSearch}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Search
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 py-3 w-full hover:text-subMain">
          {isLoggedIn ? (
            <ul className="flex gap-0 items-center">
              <h1 className="text-white hover:text-subMain">
                Welcome, {user && user.name ? user.name : "Guest"}
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
                  <div className="absolute text-red-700 font-medium bg-white rounded-sm w-28 px-3 py-2 top-10 left-0 text-center">
                    <button
                      className="flex gap-2"
                      onClick={() => dispatch(logout(navigate))}
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
            <ul className="flex gap-3 justify-center">
              <button
                className="bg-red-600 hover:bg-transparent hover:border rounded-sm px-2 py-1"
                onClick={handleClickLogin}
              >
                login
              </button>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
