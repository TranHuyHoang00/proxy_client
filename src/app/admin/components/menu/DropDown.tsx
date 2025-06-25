"use client";
import { Dropdown } from "antd";
import { FaChevronDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import AvatarImage from "@assets/images/avatar.png";
import Image from "next/image";
import type { MenuProps } from "antd";
export const DropDown = () => {
  const onClick: MenuProps["onClick"] = async ({ key }) => {};
  const items: MenuProps["items"] = [
    {
      key: "wallet",
      icon: <GiWallet className="text-blue-500" />,
      label: "Ví tiền",
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      icon: <MdLogout className="text-blue-500" />,
      label: "Đăng xuất",
    },
  ];
  return (
    <Dropdown menu={{ items, onClick }}>
      <div className="px-[10px] py-[10px] flex items-center justify-between space-x-[10px]">
        <div className="flex-shrink-0">
          <Image src={AvatarImage} alt="Logo" className="h-[35px] w-[35px]" />
        </div>
        <div className="line-clamp-1 flex-1 max-w-[120px]">
          <span className=" cursor-default font-medium">
            TranHuyHoang23022001@gmail.com
          </span>
        </div>
        <FaChevronDown />
      </div>
    </Dropdown>
  );
};
