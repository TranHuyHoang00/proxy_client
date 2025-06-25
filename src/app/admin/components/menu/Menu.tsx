"use client";
import { Menu as MenuAnt } from "antd";
import { FaUser } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { useRouter } from "next/navigation";
type MenuProps = {
  setOpenMenuDrawer: (value: boolean) => void;
};
export type MenuItemType = {
  key: string;
  icon?: React.ReactNode;
  label: string | React.ReactNode;
  title: string;
};
const MenuItem: MenuItemType[] = [
  {
    key: `/admin/user`,
    icon: <FaUser />,
    label: "User",
    title: "User",
  },
  {
    key: `/admin/proxy`,
    icon: <SiNginxproxymanager />,
    label: "Proxy",
    title: "Proxy",
  },
];
export const Menu = ({ setOpenMenuDrawer }: MenuProps) => {
  const router = useRouter();
  const onClickMenuItem = (item: { key: string }) => {
    setOpenMenuDrawer(false);
    router.push(item.key);
  };
  return (
    <MenuAnt
      theme="light"
      mode="inline"
      onClick={(item) => onClickMenuItem(item)}
      items={MenuItem}
    />
  );
};
