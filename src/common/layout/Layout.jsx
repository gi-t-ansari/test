import React from "react";
import Header from "./Header";
import { ADMIN_MENU } from "../menu/menu";
import { Tab } from "../components";

const Layout = (props) => {
  return (
    <div className="w-screen h-screen scroll-smooth">
      <div className="w-full h-[6.3%] sticky top-0">
        <Header />
      </div>
      <div className="w-full h-[12%] flex justify-between gap-x-2 items-center   py-2 sticky top-0 bg-primary  overflow-x-auto custom-scrollbar scrollbar-sm">
        {ADMIN_MENU.map((item, i) => (
          <Tab data={item} key={i} />
        ))}
      </div>
      <div className="h-[81.7%] bg-primary px-6 py-3 overflow-y-auto text-gray-900 text-3xl custom-scrollbar scrollbar-sm">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
