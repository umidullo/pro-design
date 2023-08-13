import React, { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header';
const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${inter.className}`}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
