import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
export default function CssHome() {
  const [isClicked, setIsClicked] = useState(false);
  const CssSideList = [
    { name: "CSS Intro", to: "cssIntro" },
    { name: "CSS Shadow", to: "cssShadows" },
    { name: "Outlet", to: "outlet" },
    { name: "layout", to: "layout" },
  ];
  const handleClick = (e) => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="grid grid-cols-6 pt-12 gap-1 border-stone-700 bg-gray-50 place-items-start">
      <ul className="col-start-1 col-end-2 max-md:col-end-3 place-items-start w-full h-full text-left bg-gray-300">
        {CssSideList.map((cssList) => (
          <li
            className="grid place-items-start mx-auto w-full hover:text-gray-400 hover:bg-white"
            key={cssList.name}
          >
            <Link
              className="m-0 p-0 w-full mx-auto pl-2 max-md:text-base"
              to={cssList.to}
              onClick={handleClick}
              style={{
                backgroundColor: isClicked ? "white" : "gray",
                color: isClicked ? "black" : "white",
                cursor: "pointer",
              }}
            >
              {cssList.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="col-start-2 max-md:col-start-3 col-span-5 text-left">
        <Outlet />
      </div>
    </div>
  );
}
