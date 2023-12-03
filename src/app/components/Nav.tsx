import React from "react";
import Logo from "../assets/Logo.png";
export const Nav = () => {
  return (
    <nav className=" border-gray-400 border-b-2 bg-white">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <figure className="max-w-[150px] flex ">
          <img
            src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.15752-9/377150245_1477468062986683_5390760922577480655_n.png?stp=dst-png_s2048x2048&_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=4MA02ZhmSmoAX-ruyP3&_nc_ht=scontent-ord5-2.xx&oh=03_AdTlYnWv3HAwshMjeCpk2nHSzBgk2yBWxxh2x3IrY4etLQ&oe=6593657C"
            className="w-full"
            alt=""
          />
        </figure>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-xl  rounded "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-xl  rounded "
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
