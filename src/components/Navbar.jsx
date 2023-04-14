import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState();

  const handleClick = () => setNav(!nav);
  const navigate = useNavigate();
  const handleClose = () => setNav(!nav);

  const handleClickSearch = (i) => {
    navigate(`/search`);
  };
  const handleClickHome = (i) => {
    navigate(`/`);
  };
  

  return (
    <div className="sticky top-0 z-10 bg-transparent justify-between drop-shadow-lg px-16 py-3">
      <div className="flex justify-between items-center w-full text-white">
        <div className="w-20">
          <h1 className="font-bold text-xl" onClick={() => handleClickHome(Navbar.i)}>NETPLIG</h1>
        </div>
        <div className="lg:text-lg">
          <ul className="hidden md:flex font-bold gap-3 md:gap-5">
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <span to="home" smooth={true} duration={500} onClick={() => handleClickHome(Navbar.i)} >
                Home
              </span>
            </li>
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <span to="about" smooth={true} offset={-200} duration={500} onClick={() => handleClickSearch(Navbar.i)}>
                Search
              </span>
            </li>
           
          </ul>
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
          <Link onClick={() => handleClickHome(Navbar.i)} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full hover:text-green-500">
          <Link
            onClick={() => handleClickSearch(Navbar.i)}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Search
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
