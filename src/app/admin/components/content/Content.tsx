"use client";
type ContentProps = {
  children: React.ReactNode;
  [key: string]: any;
};
export const Content = ({ children, ...props }: ContentProps) => {
  return (
    <div className="overflow-y-auto">
      <div className="p-[10px] lg:p-[15px]">
        <div className="space-y-[20px]">{children}</div>
      </div>
    </div>
  );
};
