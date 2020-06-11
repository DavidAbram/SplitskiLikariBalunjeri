import React from 'react';
import styled from 'styled-components';
import { font, device } from '../styles';
import Head from '../Head';
import Header from '../Header';
import Footer from '../Footer';

const StyledSection = styled.section`
  ${font.fluidSize(16, 18, `'Roboto', sans-serif`)}
  box-sizing: border-box;
  flex-grow: 1;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 1380px;
  padding: 20px 30px;
  width: 100%;

  @media ${device.tablet} {
    padding: 20px;
  }

  @media ${device.mobile} {
    padding: 20px;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <Head />
      <Header />
      <StyledSection>
        {children}
      </StyledSection>
      <Footer />
    </StyledWrapper>
  );
};

export default Layout;