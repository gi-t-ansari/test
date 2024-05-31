import React from "react";
import { MdRefresh } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const TableHeader = ({
  startIndex,
  endIndex,
  setStartIndex,
  setEndIndex,
  data,
}) => {
  const handleNext = () => {
    setStartIndex((prev) => prev + 50);
    setEndIndex((prev) => prev + 50);
  };
  const handlePrevious = () => {
    setStartIndex((prev) => prev - 50);
    setEndIndex((prev) => prev - 50);
  };
  return (
    <header className="flex justify-between sticky px-2 top-0 pb-3  z-10 shadow-sm bg-white">
      <div className="flex gap-4 items-center">
        <input type="checkbox" className="h-3.5 w-3.5 cursor-pointer " />
        <button className="p-2 hover:bg-gray-200 ml-2 rounded-full">
          <MdRefresh size={18} className="opacity-70" />
        </button>
        <button className="p-2 hover:bg-gray-200 mr-2 m rounded-full">
          <BiDotsVerticalRounded size={18} className="opacity-70" />
        </button>
      </div>
      <div className="flex items-center gap-2">
        {/* <span>{`${startIndex + 1}-${
            endIndex >= data?.length ? data?.length : endIndex
          }`}</span> */}
        <span className="mr-3">1 - 50</span>
        <button
          className="p-2  rounded-full"
          disabled
          onClick={handlePrevious}
          //   disabled={startIndex <= 0 ? true : false}
        >
          <RiArrowLeftSLine className="opacity-20" size={20} />
        </button>
        <button
          className="p-2 hover:bg-gray-200  rounded-full"
          onClick={handleNext}
          //   disabled={endIndex >= data?.length ? true : false}
        >
          <RiArrowRightSLine className="opacity-70" size={20} />
        </button>
      </div>
    </header>
  );
};

export default TableHeader;
