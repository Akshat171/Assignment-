import React from "react";
import { AiOutlinePlus, AiFillSetting } from "react-icons/ai";
import { FaCubes } from "react-icons/fa";
import Image from "./logo.png";
import Main2 from "./main2";

const Header = () => {
  return (
    <div class="flex flex-row min-h-screen bg-blue-50 text-gray-800">
      <aside class="sidebar w-57 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white">
        <div class="sidebar-header flex items-center justify-center py-4">
          <div class="inline-flex">
            <a href="#" class="inline-flex flex-row items-center">
              <img
                src={Image}
                alt="icon"
                width="73px"
                height="47px"
                className="rounded-full"
              />
              {/* <span class="leading-10 text-gray-700 text-2xl font-bold ml-1  font-Nuni  ">
                Stealth
              </span> */}
            </a>
          </div>
        </div>
        <div class="sidebar-content px-4 py-6">
          <ul class="flex flex-col w-full">
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-blue-100  hover:text-blue-600"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4692/4692210.png"
                  alt="icon"
                  width="25px"
                  height="25px"
                  className="rounded-full"
                />
                <span class="ml-3 font-Nuni">Report</span>
              </a>
            </li>
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-blue-100  hover:text-blue-600"
              >
                <FaCubes />

                <span class="ml-3 font-Nuni">Workspace</span>
              </a>
            </li>
            <li class="my-px">
              <a
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600"
              >
                <AiFillSetting />

                <span class="ml-3 font-Nuni">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all  duration-150 ease-in">
        <header class="header bg-white  shadow py-4 px-4">
          <div class="header-content flex items-center flex-row">
            <form action="#">
              <div class="hidden md:flex relative">
                <span class="leading-10 text-gray-700 text-2xl font-bold ml-1 font-Nuni">
                  Orders
                </span>
              </div>
              <div class="flex md:hidden">
                <a
                  href="#"
                  class="flex items-center justify-center h-10 w-10 border-transparent"
                >
                  <svg
                    class="h-6 w-6 text-gray-500"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </a>
              </div>
            </form>
            <div class="flex ml-auto">
              <button
                href="#"
                class="flex flex-row items-center h-10 px-3 rounded-lg text-white bg-blue-600 hover:text-gray-700"
              >
                <span class="flex items-center justify-center text-lg text-white font-bold">
                  <AiOutlinePlus />
                </span>
                <span class="ml-3 font-Nuni">Add Orders </span>
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
