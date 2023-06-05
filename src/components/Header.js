import React from "react";
import { AiOutlinePlus, AiFillSetting } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";
import Image from "./logo.png";
import Main2 from "./main2";

const Header = () => {
  return (
    <div className="flex flex-row min-h-screen bg-blue-50 text-gray-800">
      <aside className="sidebar w-57 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white">
        <div className="sidebar-header flex items-center justify-center py-4">
          <div className="inline-flex">
            <span href="#" className="inline-flex flex-row items-center">
              <img
                src={Image}
                alt="icon"
                width="73px"
                height="47px"
                className="rounded-full"
              />
            </span>
          </div>
        </div>
        <div className="sidebar-content px-4 py-6">
          <ul className="flex flex-col w-full">
            <li className="my-px">
              <span className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-blue-100  hover:text-blue-600">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4692/4692210.png"
                  alt="icon"
                  width="25px"
                  height="25px"
                  className="rounded-full"
                />
                <span className="ml-3 font-Nuni">Report</span>
              </span>
            </li>
            <li className="my-px">
              <span className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-blue-100  hover:text-blue-600">
                <FaCubes />

                <span className="ml-3 font-Nuni">Workspace</span>
              </span>
            </li>
            <li className="my-px">
              <span className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600">
                <AiFillSetting />

                <span className="ml-3 font-Nuni">Setting</span>
              </span>
            </li>
          </ul>
        </div>
      </aside>
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all  duration-150 ease-in">
        <header className="header bg-white  shadow py-4 px-4">
          <div className="header-content flex items-center flex-row">
            <form action="#">
              <div className="hidden md:flex relative">
                <span className="leading-10 text-gray-700 text-2xl font-bold ml-1 font-Nuni">
                  Orders
                </span>
              </div>
            </form>
            <div className="flex ml-auto">
              <button
                href="#"
                className="flex flex-row items-center h-10 px-3 rounded-lg text-white bg-blue-600 hover:text-gray-700"
              >
                <span className="flex items-center justify-center text-lg text-white font-bold">
                  <AiOutlinePlus />
                </span>
                <span className="ml-3 font-Nuni">Add Orders </span>
              </button>
            </div>
          </div>
        </header>
        <Main2 />
      </main>
    </div>
  );
};

export default Header;
