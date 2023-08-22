import Link from 'next/link';

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <div className="sticky top-0 flex w-full justify-between gap-5 border-b bg-white px-5 py-2 font-bold">
      <Link href="/">Home</Link>
      <div className="flex gap-5">
        <div>Pics</div>
        <Link href="/about">About</Link>
      </div>
    </div>
  );

  return (
    <section>
      {header}
      {children}
    </section>
  );
}
