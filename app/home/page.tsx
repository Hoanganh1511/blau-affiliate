import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InfoSection from "./_components/InfoSection";
import Ig from "./_components/Ig";
import ProductsSection from "./_components/ProductsSection";
const Page = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col py-[16px] gap-[14px]">
        <Ig />
        <InfoSection />
        <ProductsSection />
      </div>
    </div>
  );
};

export default Page;
