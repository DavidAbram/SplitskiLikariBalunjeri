import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import GalleryComponent from '../components/Gallery';

export const GalleryTemplate = ({
  title,
}) => (
  <GalleryComponent
    title={title}
  />
);

GalleryTemplate.propTypes = {
  title: PropTypes.string,
};

const Gallery = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <GalleryTemplate
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
  query GalleryTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "activity" } }) {
      frontmatter {
        title
      }
    }
  }
`;
