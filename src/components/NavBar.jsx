import React from "react";
import * as Unicons from "@iconscout/react-unicons";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center flex-wrap bg-gray-800 p-7 ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-mono text-5xl tracking-tight ml-2 font-extrabold">
          <span className="text-red-500">R</span>
          <span className="text-yellow-500">i</span>
          <span className="text-green-500">c</span>
          <span className="text-blue-500">k</span>{" "}
          <span className="text-indigo-500">&</span>{" "}
          <span className="text-yellow-500">M</span>
          <span className="text-green-500">o</span>
          <span className="text-blue-500">r</span>
          <span className="text-indigo-500">t</span>
          <span className="text-purple-500">y</span>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
