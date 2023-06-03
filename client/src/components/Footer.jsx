import React from "react";

export const Footer = () => {
  return (
    <div className="z-40 pt-36">
      <footer className="bg-white shadow text-center dark:bg-gray-900 mt-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
       
              <h1 className="text-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                NETPLIG
              </h1>
            </a>

          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};
