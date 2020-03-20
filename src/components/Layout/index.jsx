import React from 'react';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <section>
        {children}
      </section>
      <Footer />
    </>
  );
};

export default Layout;