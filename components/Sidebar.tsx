import StateContext, { ContextProvider } from "@/contexts/ContextProvider";
import { path } from "@/data/dummy";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { BsCircle } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import Image from "next/image";
import english from "../src/english.png";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useContext<any>(StateContext);

  const handleCloseSideBar = () => {
    if (activeMenu) {
      setActiveMenu(false);
    }
  };

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <div className="w-72 absolute top-0 bg-white h-screen">
          <div className="h-72 bg-[#326BFF] flex-col">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu: any) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 text-white"
              >
                <MdOutlineCancel />
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="border-4 rounded-full border-white w-32 h-32"></div>
            </div>
            <p className="flex justify-center mt-4 text-lg text-white">
              Room 301
            </p>
          </div>
          <div className="mt-4">
            {path.map((item) => (
              <div>
                {/* <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p> */}
                <Link
                  href="/"
                  className="flex items-center gap-5 p-4 text-md mx-2 rounded-lg hover:bg-gray-300"
                  onClick={handleCloseSideBar}
                >
                  <span className="text-[#979FA7]">{item.icon}</span>
                  <span className="text-lg capitalize text-[#979FA7]">
                    {item.title}
                  </span>
                </Link>
              </div>
            ))}
            <div className="flex justify-between gap-5 p-4 pl-3.5 text-md mx-2 rounded-lg">
              <div className="flex items-center gap-[18px]">
                <Image src={english} alt="logo" className="w-5 h-4" />
                <p className="text-lg capitalize text-[#979FA7]">English</p>
              </div>
              <p className="text-lg capitalize text-[#326BFF] cursor-pointer">
                Change
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
