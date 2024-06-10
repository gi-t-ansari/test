import React from "react";
import { IoIosSchool } from "react-icons/io";
import { Link } from "react-router-dom";
import { APP_URL } from "../../config";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-4 py-1.5 bg-wooden-primary text-gray-800 ">
      <Link to={APP_URL.DASHBOARD}>
        <div className="flex items-center gap-4">
          <IoIosSchool size={30} />
          <span className="text-2xl font-semibold">
            International School of Excellence
          </span>
        </div>
      </Link>
      <Link to={APP_URL.PROFILE}>
        <div className="text-xl font-semibold cursor-pointer">Saurabh</div>
      </Link>
    </header>
  );
};

export default Header;
