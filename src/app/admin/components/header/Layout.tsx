"use client";
type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="sticky top-0 z-50 ">
      <div className="flex items-center justify-between bg-white shadow-sm px-[20px]">
        {children}
      </div>
    </div>
  );
};
