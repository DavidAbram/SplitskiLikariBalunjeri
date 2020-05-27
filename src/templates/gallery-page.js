import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import GalleryComponent from '../components/Gallery';

export const GalleryPageTemplate = ({
  title,
}) => (
  <GalleryComponent
    title={title}
  />
);

GalleryPageTemplate.propTypes = {
  title: PropTypes.string,
};

const Gallery = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <GalleryPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};

Gallery.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
      fields: PropTypes.object,
    }),
  }),
};

export default Gallery;

export const pageQuery = graphql`
  query GalleryPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "gallery-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
