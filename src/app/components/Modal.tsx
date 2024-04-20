import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = isOpen ? "hidden" : "auto";
    };

    lockScroll();

    return () => {
      lockScroll(); // Cleanup function to reset scroll on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto overflow-x-hidden px-4 py-10 sm:px-10 md:w-full md:max-w-md lg:max-w-xl mx-auto`}
    >
      <div className="relative rounded-lg shadow-lg bg-white p-10  border-2">
        <button
          type="button"
          className="absolute top-3 right-2.5 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
