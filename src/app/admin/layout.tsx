import { Header } from "@admin/components/header/Header";
import { Footer } from "@admin/components/footer/Footer";
import { Layout } from "@admin/components/layout/Layout";
import { Sider } from "@admin/components/sider/Sider";
import { Menu } from "@admin/components/menu/Menu";
export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Layout hasSider style={{ minHeight: "100vh" }}>
        <Sider>
          <Menu />
        </Sider>
        <Layout>
          <Header />
          <div className="text-[30px]">KP</div>
          <Footer />
        </Layout>
      </Layout>
    </div>
  )
}