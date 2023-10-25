import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleCssNav = () => {
    navigate("/css");
  };
  const handleJSNav = () => {
    navigate("/js");
  };
  const handlereactJSNav = () => {
    navigate("/reactjs");
  };
  const handlePhpNav = () => {
    navigate("/php");
  };

  return (
    <div className="pt-10">
      <div className="bg-orange-700 h-80 w-full flex flex-col justify-center items-center max-md:h-40">
        <h1 className="text-6xl font-gabarito font-bold max-md:text-5xl max-sm:text-3xl">
          Learn and Grow
        </h1>
        <p className="font-neon text-2xl max-md:text-xl max-sm:text-sm">
          Learn Code with our Best Projects
        </p>
      </div>
      <div className="home-service-list w-full">
        <div className="flex w-full justify-center items-center bg-yellow-200 py-10 max-md:flex-col">
          <div className="flex w-full flex-col justify-center items-center">
            <h1 className="text-6xl font-neon font-bold max-md:text-4xl">
              CSS
            </h1>
            <p className="font-neon font-semibold">Learn CSS and Frameworks</p>
          </div>
          <div className="flex w-full justify-center items-center max-md:mt-5">
            <button
              onClick={handleCssNav}
              className="bg-blue-700 font-bold rounded-lg px-4 py-2"
            >
              Go to CSS
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center items-center bg-pink-200 py-10 max-md:flex-col">
          <div className="flex w-full flex-col justify-center items-center">
            <h1 className="text-6xl font-neon font-bold max-md:text-4xl">
              JavaScript
            </h1>
            <p className="font-neon font-semibold">
              Learn JavaScript with Projects
            </p>
          </div>
          <div className="flex w-full justify-center items-center">
            <button
              onClick={handleJSNav}
              className="bg-blue-700 font-bold rounded-lg px-4 py-2 max-md:mt-5"
            >
              JS Projects
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center items-center bg-orange-200 py-10 max-md:flex-col">
          <div className="flex w-full flex-col justify-center items-center">
            <h1 className="text-6xl font-neon font-bold max-md:text-4xl">
              React Js
            </h1>
            <p className="font-neon font-semibold">
              Learn React Js with Projects
            </p>
          </div>
          <div className="flex w-full justify-center items-center max-md:mt-5">
            <button
              onClick={handlereactJSNav}
              className="bg-blue-700 font-bold rounded-lg px-4 py-2"
            >
              React Js Projects
            </button>
          </div>
        </div>
        <div className="flex w-full justify-center items-center bg-slate-200 py-10 max-md:flex-col">
          <div className="flex w-full flex-col justify-center items-center">
            <h1 className="text-6xl font-neon font-bold max-md:text-4xl">
              PHP
            </h1>
            <p className="font-neon font-semibold">Learn PHP with Projects</p>
          </div>
          <div className="flex w-full justify-center items-center max-md:mt-5">
            <button
              onClick={handlePhpNav}
              className="bg-blue-700 font-bold rounded-lg px-4 py-2"
            >
              PHP Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
