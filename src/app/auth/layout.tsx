export default function LayoutAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>Header Auth</div>
      {children}
      <div>Footer Auth</div>
    </div>
  );
}
