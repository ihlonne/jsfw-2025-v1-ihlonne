import '../styles/globals.css';
import type { Metadata } from 'next';
import {
  Geist,
  Geist_Mono,
} from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Online Shop',
  description: 'A basic e-com site',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-pink-100`}
      >
        {children}
      </body>
    </html>
  );
}
