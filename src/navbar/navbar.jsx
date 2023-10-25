import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Hamburger from "../assets/Hamburger_icon.svg.png";
import Cross from "../assets/red-cross.png";
export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const navList = [
    { name: "Home", to: "/" },
    { name: "CSS", to: "css" },
    { name: "JavaScript", to: "javaScript" },
    { name: "ReactJs", to: "reactjs" },
    { name: "PHP", to: "php" },
  ];
  return (
    <div className="fixed w-full bg-white px-3 top-0">
      <nav className="flex justify-between items-center  max-md:block h-fit">
        <div className="logo flex justify-between items-center">
          <Link className="text-3xl font-bold" to={"/"}>
            VIAJIRA
          </Link>
        </div>
        <hr className="md:hidden" />
        <ul
          className={`flex justify-center items-center max-md:block my-2 ${
            !showNavbar ? "max-md:visible" : "max-md:hidden"
          }`}
        >
          {navList.map((link) => (
            <li key={link.name} className="">
              <Link
                to={link.to}
                className="text-xl max-md:w-full flex justify-start m-0 p-0 hover:text-slate-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div
        className="absolute top-0 right-7 hidden max-md:block rounded"
        onClick={handleShowNavbar}
      >
        <img
          src={showNavbar ? Hamburger : Cross}
          alt="Click"
          height={40}
          width={40}
          className="text-black bg-none"
        />
      </div>
      <hr />
    </div>
  );
}
