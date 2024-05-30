import React from "react";
import {
  Menu,
  MenuItem,
  Sidebar,
  SubMenu,
  menuClasses,
  sidebarClasses,
} from "react-pro-sidebar";
import { MAIN_MENU } from "../../menu/menu";
import { Link, useLocation } from "react-router-dom";

const SidebarLayout = ({ expanded }) => {
  const location = useLocation();
  return (
    <Sidebar className="w-full h-full bg-[#F6F8FC]" collapsed={!expanded}>
      {MAIN_MENU.map((item, index) => (
        <Menu
          key={index + 1}
          className={`${location.pathname === item?.url && "bg-[#D3E3FD] "}`}
        >
          <Link to={item?.url}>
            <MenuItem
              className={`text-black ${
                index === MAIN_MENU.length - 1 && "text-red-500"
              }`}
              icon={
                location.pathname === item?.url ? (
                  <item.selectedIcon className="text-2xl" />
                ) : (
                  <item.icon className="text-2xl" />
                )
              }
            >
              {" "}
              <span
                className={`${
                  location.pathname === item?.url ? "font-bold" : "font-normal"
                }`}
              >
                {item.name}
              </span>{" "}
            </MenuItem>
          </Link>
        </Menu>
      ))}
    </Sidebar>
  );
};

export default SidebarLayout;
