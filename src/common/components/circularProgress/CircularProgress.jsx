import React from "react";

const CircularProgress = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <div className="md:h-16 h-8 md:w-16 w-8 rounded-full animate-spin border-primary border-y-2"></div>
    </div>
    // <div className="fixed inset-0 flex items-center justify-center  bg-transparent backdrop-blur-sm w-screen h-screen">
    //   <span className="loader"></span>
    // </div>
  );
};

export default CircularProgress;
