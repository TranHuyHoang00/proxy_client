"use client";
import { Header } from "@admin/components/header/Header";
import { Footer } from "@admin/components/footer/Footer";
import { Layout } from "@admin/components/layout/Layout";
import { Sider } from "@admin/components/sider/Sider";
import { Menu } from "@admin/components/menu/Menu";
import { Logo } from "@admin/components/logo/Logo";
import { useState } from "react";
export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="text-gray-700">
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <Sider collapsed={collapsed}>
          <Logo collapsed={collapsed} />
          <Menu setOpenMenuDrawer={setOpenMenuDrawer} />
        </Sider>
        <Layout className="overflow-auto h-screen">
          <Header
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            openMenuDrawer={openMenuDrawer}
            setOpenMenuDrawer={setOpenMenuDrawer}
          />
          <div className="text-[30px]">KP</div>
          {children}
          <Footer />
        </Layout>
      </Layout>
    </div>
  );
}
