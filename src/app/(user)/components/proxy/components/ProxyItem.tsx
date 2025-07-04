"use client";
import Image from "next/image";
import Image01Day from "@assets/images/01_day.png";
import Image30Day from "@assets/images/30_day.webp";
import Image90Day from "@assets/images/90_day.webp";
import ImageFlatVietNam from "@assets/images/flag_vietnam.png";
import ImageFlatUS from "@assets/images/flag_us.jpg";
import { FaCheck } from "react-icons/fa";
import "@user/components/proxy/Proxy.css";

type TimeType = "01" | "30" | "90";
type FlatType = "VN" | "US";
type ProxyItemProps = {
  typeProxy?: string;
  titleTime: string;
  titleProxy: string;
  priceProxy: string;
  dataDescriptions: any[];
  timeType: TimeType;
  unitProxy?: string;
  flatType: FlatType;
  tagProxy?: string;
};
export const ProxyItem = ({
  typeProxy,
  titleTime,
  titleProxy,
  priceProxy,
  dataDescriptions,
  timeType,
  unitProxy,
  flatType,
  tagProxy,
}: ProxyItemProps) => {
  const getImageDay = (timeType: TimeType) => {
    switch (timeType) {
      case "01":
        return Image01Day;
      case "30":
        return Image30Day;
      case "90":
        return Image90Day;
      default:
        return Image01Day;
    }
  };
  const getImageFlag = (flatType: FlatType) => {
    switch (flatType) {
      case "VN":
        return ImageFlatVietNam;
      case "US":
        return ImageFlatUS;
      default:
        return Image01Day;
    }
  };
  return (
    <div
      className="relative px-[25px] py-[30px] rounded-[15px] grid-item-default-gradient text-[#144f6c] 
      cursor-pointer hover:scale-105 transition-transform duration-400 ease-in-out"
    >
      <div className="absolute left-0 top-0 h-[120px] w-full bg-[linear-gradient(180deg,rgba(179,230,255,0.4),rgba(179,230,255,0))] rounded-t-[15px]"></div>
      {typeProxy && (
        <div className="absolute right-[15px] bottom-[15px] py-[5px] px-[10px] rounded-[5px] gradient-border bg-white font-[600]">
          <span className="gradient-text">{typeProxy}</span>
        </div>
      )}
      <div className="absolute left-[15px] top-[15px]">
        <Image
          src={getImageFlag(flatType)}
          alt="proxy-30-ngay"
          loading="lazy"
          className="h-[25px] w-[40px] rounded-[5px]"
        />
      </div>
      {tagProxy && (
        <div className="absolute right-[15px] top-[15px] py-[5px] px-[10px] rounded-[5px] gradient-border tag_bg font-[700]">
          <span className="text-white">{tagProxy}</span>
        </div>
      )}
      <div className="relative">
        <div className="text-center space-y-[15px]">
          <div className="flex items-center justify-center">
            <Image
              src={getImageDay(timeType)}
              alt="proxy-30-ngay"
              loading="lazy"
              className="h-[50px] w-auto"
            />
          </div>
          <div className="space-y-[10px]">
            <div className="font-[700] text-[18px]">
              <label>{titleTime}</label>
            </div>
            <div className="font-[700] text-[22px] pt-[5px] line-clamp-2">
              <label>{titleProxy}</label>
            </div>
            <div className="text-[40px] text-[#13c8e6] font-[700] line-clamp-1">
              <label>
                {priceProxy}
                <label className="text-[18px]">đ</label>
                {unitProxy && (
                  <label className="text-[30px]"> / {unitProxy}</label>
                )}
              </label>
            </div>
          </div>
          <div className="py-[5px]">
            <button className="gradient-border w-full h-[50px] rounded-full cursor-pointer">
              <span className="gradient-text font-medium text-[18px]">
                Mua Ngay
              </span>
            </button>
          </div>
          <div className="text-[14px] text-[#3e4150] space-y-[15px]">
            {dataDescriptions &&
              dataDescriptions.map((item) => {
                return (
                  <div
                    key={item?.id}
                    className="flex items-center gap-x-[10px]"
                  >
                    <FaCheck className="text-[16px] text-[#02d016]" />
                    <label className="break-words whitespace-normal">
                      {item?.label}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
