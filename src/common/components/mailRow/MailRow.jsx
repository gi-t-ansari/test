import moment from "moment";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { FaRegEnvelopeOpen } from "react-icons/fa6";
import { MdOutlineArchive } from "react-icons/md";
import { LuClock5 } from "react-icons/lu";

const MailRow = ({ data, expanded, i }) => {
  const [starred, setStarred] = useState(false);
  const [actionIcons, setActionIcons] = useState(false);

  const toggleStarred = () => {
    setStarred(!starred);
  };

  return (
    <tr
      className="w-full cursor-pointer hover:shadow-md border-y relative"
      onMouseEnter={() => setActionIcons(true)}
      onMouseLeave={() => setActionIcons(false)}
    >
      <td className="px-2 py-2" align="left">
        <input type="checkbox" className="h-3.5 w-3.5 " />
      </td>
      <td className="px-2 py-2" align="left">
        {starred ? (
          <TiStarFullOutline
            className="text-[#F7CA4C]"
            onClick={toggleStarred}
            size={18}
          />
        ) : (
          <TiStarOutline
            className="opacity-30"
            size={18}
            onClick={toggleStarred}
          />
        )}
      </td>
      <td className="px-2 py-2 pr-4 text-sm font-bold " align="left">
        Medium Daily Digest
      </td>
      <td
        className={`"px-2 py-2 text-sm ${
          expanded ? "max-w-[63vw]" : "max-w-[73vw]"
        } truncate "`}
        align="left"
      >
        <span className="font-bold">{`(Webinar) Last call to register for this week’s webinar!`}</span>
        <span className="">
          {`- (Webinar) Last call to register for this week’s webinar! (Webinar) Last call to register for this week’s webinar! (Webinar) week’s webinar! (Webinar)`}
        </span>
      </td>
      <td className="px-2 py-2 text-sm font-bold" align="left">
        {moment(new Date()).format("MMM DD")}
      </td>
      {actionIcons && (
        <td className="absolute right-0 bg-white z-10 px-2 pr-4 py-0.5 gap-3 flex items-center">
          <div className="p-2 hover:bg-gray-200 rounded-full">
            <MdOutlineArchive size={18} className="opacity-65" />
          </div>
          <div className="p-2 hover:bg-gray-200 rounded-full">
            <RiDeleteBin6Line size={18} className="opacity-65" />
          </div>
          <div className="p-2 hover:bg-gray-200 rounded-full">
            <FaRegEnvelopeOpen size={16} className="opacity-65" />
          </div>{" "}
          <div className="p-2 hover:bg-gray-200 rounded-full">
            <LuClock5 size={18} className="opacity-65" />
          </div>
        </td>
      )}
    </tr>
  );
};

export default MailRow;
