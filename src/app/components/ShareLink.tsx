import React from "react";

const ShareLink = ({ isOpen, onClose,shareLink }) => {
  if (!isOpen) return null; // Don't render if not open

  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-500 bg-opacity-75 overflow-auto px-4 py-6 sm:px-0 md:w-full md:max-w-md lg:max-w-xl`}
    >
      <div className="relative md:rounded-lg shadow-lg bg-white">
        <button
          type="button"
          className="absolute top-3 right-2.5 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          onClick={onClose}
        >
          Copy
        </button>
        <div className="p-6">
          {/* Your popup content here */}
          
          
          <p> Your Link is : <a href={shareLink} className="underline" target="_blank"> {shareLink}</a></p>
         
        </div>
      </div>
    </div>
  );
};

export default ShareLink;
