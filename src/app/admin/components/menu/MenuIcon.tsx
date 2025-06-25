"use client";
import { MenuOutlined } from "@ant-design/icons";
type MenuIconProps = {
  setOpenMenu: (value: boolean) => void;
};

export const MenuIcon = ({ setOpenMenu }: MenuIconProps) => {
  return (
    <div className="block lg:hidden text-[24px] cursor-pointer">
      <MenuOutlined onClick={() => setOpenMenu(true)} />
    </div>
  );
};
