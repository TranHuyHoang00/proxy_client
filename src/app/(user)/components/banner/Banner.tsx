"use client";
import { Content } from "@user/components/banner/Content";
import "@user/components/banner/Banner.css";
export const Banner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat py-[50px] px-[15px] sm:px-[25px] md:px-[50px] lg:px-[100px] xl:px-[200px]"
      style={{
        backgroundImage: 'url("/images/bg_banner.jpg")',
      }}
    >
      <Content />
    </div>
  );
};
