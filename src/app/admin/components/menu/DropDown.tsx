"use client";
import { Dropdown } from "antd";
import { AiFillCaretDown } from "react-icons/ai";
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
      icon: <GiWallet />,
      label: "Wallet",
    },
    {
      type: "divider",
    },

    {
      key: "logout",
      icon: <MdLogout />,
      label: "Logout",
    },
  ];
  return (
    <Dropdown menu={{ items, onClick }}>
      <div
        className="bg-white px-[10px] py-[5px] rounded-[5px]
        flex items-center justify-between space-x-[5px]"
      >
        <div className="flex-shrink-0">
          <Image src={AvatarImage} alt="Logo" />
        </div>
        <div className="line-clamp-1 flex-1 max-w-[120px]">
          <span className="text-gray-600 cursor-default font-medium">
            TranHuyHoang23022001
          </span>
        </div>
        <AiFillCaretDown />
      </div>
    </Dropdown>
  );
};
