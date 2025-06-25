import { Admin } from "@admin/components/Admin";
export default function LayoutAdmin({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Admin>{children}</Admin>;
}
