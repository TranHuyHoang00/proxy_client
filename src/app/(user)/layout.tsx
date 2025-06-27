//import "@assets/css/animation_py.css";
//import "@assets/css/common.css";
//import "@assets/css/element-variables.css";
//import "@assets/css/footer.css";
//import "@assets/css/header.css";
import "@assets/css/index.css";
//import "@assets/css/login_pop.css";
import { Header } from "@user/components/header/Header";
import { Footer } from "@user/components/footer/Footer";
export default function LayoutUser({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
