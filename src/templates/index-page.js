import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Notifications from '../components/Notifications';
import Activities from '../components/Activities';
import Gallery from '../components/Gallery';
import { device, font, colors } from '../components/styles';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    flex-wrap: wrap;
  }
`;

const StyledDiv = styled.div`
  flex-basis: 30%;
  width: 30%;

  @media ${device.mobile} {
    order: 0;
    flex-basis: 100%;
    width: 100%;
  }
`;

export const IndexPageTemplate = (props) => (
  <StyledWrapper>
    <Notifications title={props.notificationsTitle} />
    <StyledDiv>
      <Activities title={props.activitiesTitle} />
      <Gallery title={props.galleryTitle}  />
    </StyledDiv>
  </StyledWrapper>
);

IndexPageTemplate.propTypes = {
  notificationsTitle: PropTypes.string,
  activitiesTitle: PropTypes.string,
  galleryTitle: PropTypes.string,
};

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate 
        notificationsTitle={data.markdownRemark.frontmatter.notificationsTitle}
        activitiesTitle={data.markdownRemark.frontmatter.activitiesTitle}
        galleryTitle={data.markdownRemark.frontmatter.galleryTitle}
      />
    </Layout>
  );
};

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        notificationsTitle
        activitiesTitle
        galleryTitle
      }
    }
  }
`;

export default IndexPage;
