"use client";
import LayoutAnt from "antd/lib/layout/layout";
type LayoutProps = {
  children: React.ReactNode;
  [key: string]: any;
};
export const Layout = ({ children, ...props }: LayoutProps) => {
  return <LayoutAnt {...props}>{children}</LayoutAnt>;
};
