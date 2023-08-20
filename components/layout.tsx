import React, { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import Footer from '@/components/footer';
import Header from '@/components/header';
import BlurCircle from '@/components/blur-circle';
const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={`${inter.className} relative`}>
      <BlurCircle className="bg-blue-500 top-8 left-10 delay-200" />
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
