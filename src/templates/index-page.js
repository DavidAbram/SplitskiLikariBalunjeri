import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Notifications from '../components/Notifications';
import Activities from '../components/Activities';
import Gallery from '../components/Gallery';
import { device } from '../components/styles';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-wrap: wrap;
  }

  @media ${device.mobile} {
    flex-wrap: wrap;
  }
`;

const StyledDiv = styled.div`
  flex-basis: 30%;
  width: 30%;

  @media ${device.tablet} {
    flex-grow: 1;
    flex-basis: 30%;
    width: 30%;
    
    .activity {
      width: calc(100% - 35px);  
      margin: 17.5px;
    }
  }

  @media ${device.mobile} {
    flex-basis: 100%;
    width: 100%;
    .activity {
      margin: 20px;
    }
  }
`;

export const IndexPageTemplate = () => (
  <StyledWrapper>
    <Notifications />
    <StyledDiv>
      <Activities />
      <Gallery />
    </StyledDiv>
  </StyledWrapper>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default IndexPage;
