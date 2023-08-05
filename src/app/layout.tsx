import type { Metadata } from 'next';
import { Libre_Baskerville, Outfit } from 'next/font/google';
import './globals.css';

const libre = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-libre',
  weight: '400',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Larry Whatever',
  description: 'A Blog in 2023',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footer = (
    <footer>
      <div className="border-t border-slate-500 mt-6 py-6 text-center text-slate-400">
        <p>Copyright 2023 Larry Ditton</p>
      </div>
    </footer>
  );

  const header = (
    <div className="sticky top-0 bg-white border-b w-full flex justify-end gap-5 pr-5 font-bold">
      <div>Pics</div>
      <div>About</div>
    </div>
  );

  return (
    <html lang="en">
      <body className={`${outfit.variable} ${libre.variable} font-sans`}>
        {header}
        <div>
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
