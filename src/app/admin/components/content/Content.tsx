"use client";
import { Layout } from "antd";

const { Header, Footer, Sider } = Layout;

type ContentProps = {
  children: React.ReactNode;
  [key: string]: any;
};
export const Content = ({ children, ...props }: ContentProps) => {
  return <Header {...props}>{children}</Header>;
};
