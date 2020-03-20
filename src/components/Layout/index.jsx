import React from 'react';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ title, subtitle, logo, hero, heroHeight, children }) => {
  return (
    <>
      <Head />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;