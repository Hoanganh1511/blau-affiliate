import React from "react";
import Image from "next/image";
const TopBar = () => {
  return (
    <>
      <div className="fixed  z-10 top-0 left-0 w-screen  bg-white">
        <div className="w-[540px] h-[50px] mx-auto flex justify-center items-center">
          <div className="flex items-center">
            <Image
              src="/images/icons/flower-icon.png"
              alt="icon"
              width={24}
              height={24}
            />
            <p className="text-[20px] ml-[6px]">Blau</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
