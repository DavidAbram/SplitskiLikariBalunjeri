import React from 'react';
import styled from 'styled-components';
import { font, device } from '../styles';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';

const StyledSection = styled.section`
  ${font.fluidSize(14, 16, `'Roboto', sans-serif`)}
  line-height: 21px;
  max-width: 1280px;
  margin: auto;
  padding: 20px 30px;

  @media ${device.tablet} {
    padding: 20px;
  }

  @media ${device.mobile} {
    padding: 15px;
  }
`;


const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <Header />
      <StyledSection>
        {children}
      </StyledSection>
      <Footer />
    </>
  );
};

export default Layout;