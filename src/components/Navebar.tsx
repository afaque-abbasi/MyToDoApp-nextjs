import Link from "next/link";
import React from "react";

const Navebar = () => {
  return (
    <div className="bg-purple-500 h-[60px] flex items-center justify-between px-4 lg:px-8">
      {/* logo */}
      <div className="uppercase cursor-pointer text-lg font-bold text-white">
        <span className="text-black bg-white px-3 py-1 rounded-l-xl hover:bg-black hover:text-white transition duration-300">
          afa
        </span>
        <span className="text-white bg-black px-3 py-1 rounded-r-xl hover:bg-white hover:text-black transition duration-300">
          que
        </span>
      </div>
      {/* menu buttons */}
      <div className="flex gap-4 text-sm lg:text-base font-semibold">
        <Link
          href={"/"}
          className="bg-white text-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
        >
          Home
        </Link>

        <Link
          href={"/todo"}
          className="bg-white text-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
        >
          Todo
        </Link>
        
        <Link
          href={"/about"}
          className="bg-white text-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
        >
          About
        </Link>
        

        {/* login button */}
      </div>
      <div className="flex gap-4">
        <button className="bg-white text-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition duration-300">
          Sign In
        </button>
        <button className="bg-white text-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 hover:text-white transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navebar;
