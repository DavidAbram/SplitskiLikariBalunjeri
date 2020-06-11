import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Members from '../components/Members';
import Content, { HTMLContent } from '../components/Content';
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

const LeftSideDiv = styled.div`
  max-width: 850px;
  flex-basis: calc(70% - 30px);
  width: calc(70% - 30px);

  @media ${device.tablet} {
    min-width: 600px;
    flex-grow: 1;
    flex-basis: calc(70% - 30px);
    width: calc(70% - 30px);
    margin-right: 30px;
  }

  @media ${device.mobile} {
    flex-basis: 100%;
    width: 100%;
  }
`;

export const AboutPageTemplate = ({
  title,
  content,
  membersTitle,
  PageContent = Content,
}) => (
    <StyledWrapper>
      <LeftSideDiv>
        <Title>{title}</Title>
        <PageContent>{content}</PageContent>
      </LeftSideDiv>
      <StyledDiv>
        <Members title={membersTitle} />
      </StyledDiv>
    </StyledWrapper>
  );

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        content={html}
        PageContent={HTMLContent}
        membersTitle={frontmatter.membersTitle}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
        membersTitle
      }
    }
  }
`;
