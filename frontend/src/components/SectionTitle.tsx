export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="my-4 text-center font-serif text-3xl font-bold">
      {children}
    </h2>
  );
}
