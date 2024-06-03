import React from "react";
import Button from "../../common/components/button/Button";
import { RiDeleteBin6Line } from "react-icons/ri";

const EmailForm = ({ handleClose }) => {
  return (
    <form>
      <div className="px-3 pb-1 bg-white">
        <input
          type="email"
          placeholder="Recipient"
          className="py-2 w-full focus:outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="py-2 w-full focus:outline-none border-y mb-2 "
        />
        <textarea
          className="w-full focus:outline-none  resize-none overflow-y-auto scroll-smooth custom-scrollbar"
          rows={18}
        />
      </div>
      <footer className="p-3  flex justify-between items-center  ">
        <Button size="sm" color="blue">
          Send
        </Button>
        <RiDeleteBin6Line
          className="opacity-70 cursor-pointer"
          onClick={handleClose}
          size={18}
        />
      </footer>
    </form>
  );
};

export default EmailForm;
