import StateContext from "@/contexts/ContextProvider";
import Image from "next/image";
import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import altologo from "../src/altologo.png";

const Navbar = () => {
  const { setActiveMenu } = useContext<any>(StateContext);
  return (
    <div className="flex items-center justify-between p-4 bg-[#326BFF]">
      <FaBars
        onClick={() => setActiveMenu((prevActiveMenu: any) => !prevActiveMenu)}
        className="cursor-pointer text-white text-2xl"
      />
      <div className="flex items-center justify-center">
        <Image src={altologo} alt="logo" className="w-[26px] h-[24px]" />
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-bold text-white">AltoTech</p>
          <p className=" text-[8px] text-white">Hotel</p>
        </div>
      </div>
      <IoNotificationsOutline className="text-white text-2xl" />
    </div>
  );
};

export default Navbar;
