"use client";
import SiderAnt from "antd/es/layout/Sider";
type SiderProps = {
    children: React.ReactNode;
};
export const Sider = ({ children }: SiderProps) => {
    return (
        <SiderAnt
            theme="light"
            breakpoint="xl"
            collapsible
            className="overflow-y-auto h-screen lg:block hidden"
            width={250}
        >
            {children}
        </SiderAnt>
    );
};
