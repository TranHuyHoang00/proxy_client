"use client";
import { Layout } from "@admin/components/header/Layout";
import { DropDown } from "@admin/components/menu/DropDown";
import { MenuIcon } from "@admin/components/menu/MenuIcon";
import { MenuDrawer } from "@admin/components/menu/MenuDrawer";
import { Menu } from "@admin/components/menu/Menu";
import { CollapsedIcon } from "@admin/components/header/CollapsedIcon";
import { Logo } from "@admin/components/logo/Logo";
type HeaderProps = {
  setOpenMenuDrawer: (value: boolean) => void;
  openMenuDrawer: boolean;
  setCollapsed: (value: boolean) => void;
  collapsed: boolean;
};
export const Header = ({
  setOpenMenuDrawer,
  openMenuDrawer,
  setCollapsed,
  collapsed,
}: HeaderProps) => {
  return (
    <Layout>
      <div>
        <CollapsedIcon collapsed={collapsed} setCollapsed={setCollapsed} />
        <MenuIcon setOpenMenu={setOpenMenuDrawer} />
      </div>
      <DropDown />
      <MenuDrawer
        openMenuDrawer={openMenuDrawer}
        setOpenMenuDrawer={setOpenMenuDrawer}
      >
        <Logo collapsed={false} />
        <Menu setOpenMenuDrawer={setOpenMenuDrawer} />
      </MenuDrawer>
    </Layout>
  );
};
