"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BiBell, BiSolidBellRing } from "react-icons/bi";
const InfoSection = () => {
  const [isNotice, setNotice] = useState(false);
  return (
    <div className="px-[16px] py-[12px] bg-white/95 rounded-md">
      <div className="relative">
        <Image
          src="/images/avatar.jpg"
          alt=""
          width={90}
          height={90}
          className="w-[100px] h-[100px] rounded-full object-cover"
        />
        <div className="flex items-center">
          <h2 className=" font-bold text-[23px] mt-[4px]">Mầu Thùy Lam</h2>
          <div className="relative">
            {isNotice ? (
              <BiSolidBellRing
                onClick={() => setNotice(false)}
                className="text-[20px] mt-[2px] ml-[8px] cursor-pointer rotate-[30deg] text-[#5628EE]"
              />
            ) : (
              <BiBell
                onClick={() => setNotice(true)}
                className="text-[20px] mt-[2px] ml-[8px] cursor-pointer"
              />
            )}

            {/* Tooltip */}
            <div className="absolute bottom-[34px] left-0 w-[200px] p-[6px] rounded-md text-[12px] shadow-md opacity-0 animate-show-tooltip">
              Bật chuông để nhắc thông báo khi có sản phẩm mới
            </div>
            <div className=" absolute bottom-[26px] left-[10px] w-0 h-0 border-l-[6px] border-l-transparent border-t-[8px] border-t-white border-r-[6px] border-r-transparent" />
            {/* Tooltip */}
          </div>
        </div>
        <p className="text-[13px]">
          Xin chào những <i className="font-semibold">blauer</i> cutee đã ghé
          thăm 🐬
        </p>
        <p className="text-[13px] mt-[6px]">
          Đây là những món đồ mình đã mặc và review trên kênh của mình, mọi
          người ưng thì vào lựa nhaa. Các mạng xã hội mình dùng ở trên góc này
          nha.
        </p>
        <header className="absolute top-0 right-0  flex items-center justify-center gap-3">
          <Link target="_blank" href="/">
            <Image
              src="/images/icons/facebook.png"
              alt="icon"
              width={32}
              height={32}
            />
          </Link>
          <Link target="_blank" href="/">
            <Image
              src="/images/icons/instagram.png"
              alt="icon"
              width={32}
              height={32}
            />
          </Link>
          <Link target="_blank" href="/">
            <Image
              src="/images/icons/tiktok.png"
              alt="icon"
              width={32}
              height={32}
            />
          </Link>
          <Link href="/">
            <Image
              src="/images/icons/twitter.png"
              alt="icon"
              width={32}
              height={32}
            />
          </Link>
        </header>
      </div>
    </div>
  );
};

export default InfoSection;
