"use client";
import LogoImageICon from "@assets/images/logo_dark_icon.png";
import LogoImageFull from "@assets/images/logo_dark.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
type LogoProps = {
  collapsed: boolean;
};
export const Logo = ({ collapsed }: LogoProps) => {
  const router = useRouter();
  const onClickMenuItem = () => {
    router.push("/");
  };
  return (
    <div className="flex items-center justify-center p-[10px]">
      <Image
        className="h-[40px] w-auto cursor-pointer"
        onClick={() => onClickMenuItem()}
        src={collapsed ? LogoImageICon : LogoImageFull}
        alt="logo"
        priority
      />
    </div>
  );
};
