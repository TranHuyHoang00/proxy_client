import { notFound } from "next/navigation";
export default async function PageSlugUser({ params }: any) {
  const { slug } = await params;
  const validUserRoutes = ["blog"];
  if (!validUserRoutes.includes(slug)) {
    notFound();
  }
  return <div>Trang user: {slug}</div>;
}
