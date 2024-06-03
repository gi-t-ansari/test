import React, { useState } from "react";
import Header from "./Header";
import SidebarLayout from "./Sidebar";
import { MdOutlineEdit } from "react-icons/md";
import Modal from "../../components/modal/Modal";
import EmailTemplateModal from "../../../components/Modals/EmailTemplateModal";
import { IoCloseSharp } from "react-icons/io5";
import EmailForm from "../../../components/Forms/EmailForm";

const Layout = ({ children, expanded, setExpanded }) => {
  // const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <>
      {/* <div
        onClick={() => setOpen(!open)}
        className="bg-[#C2E7FF] fixed right-20 rounded-2xl p-3 z-10 bottom-20 cursor-pointer flex gap-2 items-center shadow-lg"
      >
        <MdOutlineEdit size={30} /> <span>Compose</span>
      </div> */}
      <div className="w-screen h-[100vh] font-nunito">
        <div className="h-[10%] sticky top-0 z-10">
          <Header setExpanded={setExpanded} />
        </div>

        <div className="flex w-full h-[90%] relative ">
          <div className={`sticky left-0 h-[100%] top-[10%]`}>
            <SidebarLayout
              expanded={expanded}
              setExpanded={setExpanded}
              setOpen={setOpen}
            />
          </div>
          <div
            className={`max-w[100vw] px-3 bg-white scroll-smooth transition-all duration-300  overflow-y-auto custom-scrollbar `}
          >
            {children}
          </div>
        </div>
      </div>
      <EmailTemplateModal
        open={open}
        onClose={handleClose}
        onConfirmationClose={handleClose}
      >
        <header className="flex justify-between items-center bg-[#F2F6FC] p-3 ">
          <h2 className="font-medium">New Message</h2>

          <IoCloseSharp
            size={20}
            className="cursor-pointer opacity-70"
            onClick={handleClose}
          />
        </header>
        <EmailForm handleClose={handleClose} />
      </EmailTemplateModal>
    </>
  );
};

export default Layout;
