import { Header } from "@user/components/header/Header";
import { Footer } from "@user/components/footer/Footer";

export default function LayoutUser({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}