"use client";
import SiderAnt from "antd/es/layout/Sider";
type SiderProps = {
  children: React.ReactNode;
  collapsed: boolean;
};
export const Sider = ({ children, collapsed }: SiderProps) => {
  return (
    <SiderAnt
      trigger={null}
      theme="light"
      breakpoint="xl"
      collapsible
      collapsed={collapsed}
      className="overflow-y-auto h-screen lg:block hidden border-r border-gray-100"
      width={250}
    >
      {children}
    </SiderAnt>
  );
};
