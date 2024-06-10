import React from "react";
import { Link, useLocation } from "react-router-dom";

const Tab = ({ data }) => {
  const location = useLocation();
  return (
    <Link to={data?.url}>
      <div
        className={` bg-wooden-primary flex   items-center gap-1 rounded-md px-6 py-3  hover:shadow-xl   ${
          location.pathname === data?.url
            ? "shadow-xl text-white "
            : " text-gray-800"
        } transition duration-300 ease-in-out `}
      >
        {location.pathname === data?.url ? (
          <data.selectedIcon className="text-3xl" />
        ) : (
          <data.icon className="text-3xl" />
        )}

        <span
          className={`text-[18px] tracking-wider ${
            location.pathname === data?.url && "font-semibold"
          }`}
        >
          {data?.name}
        </span>
      </div>
    </Link>
  );
};

export default Tab;
