import React, { useState } from "react";
import Button from "../button/Button";

const Modal = ({ name, open, onClose, onConfirmationClose, children }) => {
  return (
    open && (
      <div className="h-screen w-screen top-0 left-0 right-0 bottom-0 fixed">
        <div
          className="h-screen w-screen top-0 left-0 right-0 bottom-0 fixed bg-[rgba(49,49,49,0.8)] "
          onClick={onClose}
        ></div>
        <div
          className={`absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 leading-snug bg-[#f1f1f1] px-10 py-4 rounded-md max-w-[600px] min-w-[300px] `}
        >
          {name && (
            <h2 className="font-bold text-center mb-4 text-3xl">{name}</h2>
          )}
          <div>
            {children ? (
              children
            ) : (
              <>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                  dolorem ea aspernatur, harum veritatis voluptates repudiandae
                  dolorum illo vel nostrum possimus eius aperiam corporis veniam
                  illum debitis aliquam praesentium. Reprehenderit harum
                  dignissimos aliquid ipsa corrupti dolores ducimus sunt odio,
                  dicta architecto ex reiciendis, assumenda incidunt. Temporibus
                  asperiores eius sapiente ut.
                </p>
                <div className="flex justify-end gap-3 mt-4">
                  <Button variant="text" color="red" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button onClick={onConfirmationClose} color="green">
                    Confirm
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
