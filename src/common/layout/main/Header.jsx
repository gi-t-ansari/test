import React from "react";
import { IoMdMenu } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";

const Header = ({ setExpanded }) => {
  return (
    <header className="w-full py-2 px-6 h-full bg-[#F6F8FC] flex items-center justify-between">
      <div className="flex items-center">
        <IoMdMenu
          size={30}
          className="cursor-pointer"
          onClick={() => setExpanded((prev) => !prev)}
        />

        <h2 className=" text-3xl font-bold flex items-center ml-12">
          <span className="text-gradient  text-3xl cursor-pointer">Email</span>
        </h2>
      </div>
      <div className="basis-[40%] relative flex items-center">
        <input
          type="search"
          placeholder="Search in mail"
          className="px-6 py-3 rounded-full w-full bg-[#EAF1FB] focus:bg-white focus:outline-none focus:shadow-md"
        />
        <div className="absolute right-1.5  text-gray-500 cursor-pointer rounded-full hover:bg-gray-200 p-1">
          <AiOutlineSearch size={30} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <IoSettingsSharp size={25} />
        <img
          src="https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg"
          alt="logo"
          width={45}
          className="rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
