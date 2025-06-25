import { notFound } from "next/navigation";
export default async function PageSlugAdmin({ params }: any) {
  const { slug } = await params;
  const validAdminRoutes = ["user"];
  if (!validAdminRoutes.includes(slug)) {
    notFound();
  }
  return <div>Trang admin: {slug}</div>;
}
