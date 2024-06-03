import React, { useState } from "react";
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
import { MdOutlineEdit } from "react-icons/md";
import EmailTemplateModal from "../../../components/Modals/EmailTemplateModal";
import EmailForm from "../../../components/Forms/EmailForm";
import { IoCloseSharp } from "react-icons/io5";

const SidebarLayout = ({ expanded, setExpanded, setOpen }) => {
  const location = useLocation();

  return (
    <Sidebar
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className="w-full h-full bg-[#F6F8FC]"
      collapsed={!expanded}
    >
      {/* <Menu className="p-2 ">
        <MenuItem
          className="bg-[#C2E7FF] rounded-xl hover:bg-[#C2E7FF]"
          icon={<MdOutlineEdit className="text-2xl" />}
        >
          {" "}
          <span>Compose</span>
        </MenuItem>
      </Menu> */}
      <button
        className="mx-2 mb-2 p-4 bg-[#C2E7FF] rounded-2xl flex items-center gap-2 hover:shadow-lg"
        onClick={() => setOpen(true)}
      >
        <MdOutlineEdit className="text-2xl" />
        <span className={`${!expanded && "hidden"}`}>Compose</span>
      </button>

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
