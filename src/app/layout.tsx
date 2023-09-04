import type { Metadata } from 'next';
import { Libre_Baskerville, Outfit } from 'next/font/google';
import './globals.css';

const libre = Libre_Baskerville({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-libre',
  weight: '400',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
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
      <div className="mt-6 border-t border-slate-500 py-6 text-center text-slate-400">
        <p>Copyright 2023 Larry Wherever</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body className={`${outfit.variable} ${libre.variable} font-sans`}>
        <div>
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
