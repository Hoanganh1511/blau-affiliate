import React from "react";

import Image from "next/image";
const Ig = () => {
  return (
    <div className="px-[16px] py-[12px] bg-white/75 rounded-md">
      <h1 className="text-[23px] text-[#333] font-semibold mb-[10px]">
        Instagram của tui nha 🫶🏻
      </h1>
      <Image
        src="/images/profile-ig-5.jpg"
        alt=""
        width={500}
        height={306}
        className="object-contain rounded-md mb-[6px]"
      />
    </div>
  );
};

export default Ig;
