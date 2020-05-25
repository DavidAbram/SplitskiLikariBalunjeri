import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Content, { HTMLContent, StyledContent } from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const CenteredImageWrapper = styled.div`
  padding-top: 30px;
  margin: auto;
  max-width: 900px;
  width: 100%;
`;

export const VisionPageTemplate = ({
  title,
  content,
  image,
  PageContent = Content,
}) => (
    <>
      <Title>{title}</Title>
      <StyledContent>
        <PageContent>
          {content}
        </PageContent>
      </StyledContent>
      <CenteredImageWrapper>
        <PreviewCompatibleImage width="100%" height="auto" {...image} />
      </CenteredImageWrapper>
    </>
  );

VisionPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const VisionPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <VisionPageTemplate
        title={frontmatter.title}
        image={{ src: frontmatter.image.src, alt: frontmatter.image.alt }}
        content={html}
        PageContent={HTMLContent}
      />
    </Layout>
  );
};

VisionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
};

export default VisionPage;

export const pageQuery = graphql`
  query VisionPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "vision-page" } }) {
      html
      frontmatter {
        title
        image {
          alt
          src {
            childImageSharp {
              fluid(maxWidth: 1024, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
