import React from "react";
import UserMenu from "./UserMenu";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <div className="relative w-full h-24 bg-white border-b-4 border-blue-900 rounded-b-2xl flex items-center justify-center shadow-md">
      <div className="animate__animated animate__bounceInDown flex items-center justify-between w-full mx-20 px-4 pt-6">
        <div className="flex items-center">
            <b className="text-3xl pt-2 tracking-tight text-bluebig">BIG</b>
          {/* <Link rel="stylesheet" href="http://localhost:3000/dashboard">
		  </Link> */}
            <div
              className="text-base text-blue-800 font-medium pt-4"
              style={{ marginLeft: "2px" }}
            >
              FORUM
            </div>
        </div>
        <div className="flex items-center ml-60">
          <img src="/images/dasboardImages/logo-big-karier-1.svg" alt="logo" />
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex flex-col items-center">
            <img
              className="w-4 h-4"
              alt="Notification"
              src="/images/dasboardImages/carbonnotification.svg"
            />
            <div className="text-xs text-blue-800">Notification</div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-4 h-4"
              alt="Message"
              src="/images/dasboardImages/bichatlefttext.svg"
            />
            <div className="text-xs text-blue-800">Message</div>
          </div>
          <div className="flex items-center space-x-2">
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMenu;
