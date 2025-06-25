"use client";
import { RiMenuFold3Fill } from "react-icons/ri";
import { RiMenuFold4Fill } from "react-icons/ri";
type CollapsedIconProps = {
  setCollapsed: (value: boolean) => void;
  collapsed: boolean;
};
export const CollapsedIcon = ({
  setCollapsed,
  collapsed,
}: CollapsedIconProps) => {
  return (
    <div className="hidden lg:block text-[24px] ">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="cursor-pointer"
      >
        {collapsed ? <RiMenuFold4Fill /> : <RiMenuFold3Fill />}
      </button>
    </div>
  );
};
