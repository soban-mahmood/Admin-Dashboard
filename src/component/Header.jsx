import React from "react";
import { MdMenu } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const handleCross = () => {
    const navLog = document.getElementById("navLog");
    navLog.classList.toggle("hidden");
  };
  return (
    <div>
      <nav className="p-2 xl:flex xl:justify-between px-[3vw] xl:items-center xl-w-full  lg:flex lg:justify-between  md:flex md:justify-between  bg-red-500 text-white  sm:flex sm:justify-between sm:w-full ">
        <div id="navbrand" className="">
          <a href="/" className="text-[3vh] font-bold">
            Admin
          </a>
        </div>
        <div className=" md:hidden sm:hidden lg:hidden   ">
          <a href="/dashed" className="font-medium   m-4">
            Engagement Analytics
          </a>
          <a href="/user" className="font-medium   m-4">
            User Management
          </a>
        </div>

        <div
          className=" xl:hidden lg:block p-2 bg-red-500 text-white"
          onClick={handleCross}
        >
          <MdMenu className="text-[3vh] " />
        </div>

        <div
          id="navLog"
          className=" fixed bg-gray-900 inset-0  p-2   hidden"
          onClick={handleCross}
        >
          <div className="flex justify-between">
            <a href="#" className="text-[3vh] font-bold">
              Admin
            </a>
            <RxCross2 className="text-[3vh] mt-2 md:block lg:block" />
          </div>

          <div className="flex flex-col">
            <a href="/dashed" className="font-medium   m-4">
              Engagement Analytics
            </a>
            <a href="/user" className="font-medium  m-4">
              User Management
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
