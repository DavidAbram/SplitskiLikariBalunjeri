import React from 'react';
import Head from '../Head';

const Layout = ({ title, subtitle, logo, hero, heroHeight, children }) => {
  return (
    <>
      <Head />
      {children}
    </>
  );
};

export default Layout;