import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Activities from '../components/Activities';

export const ActivitiesPageTemplate = ({
  title,
}) => (
  <>
    <Title>{title}</Title>
    <Activities />
  </>
);

ActivitiesPageTemplate.propTypes = {
  title: PropTypes.string,
};

const ActivitiesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ActivitiesPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};

ActivitiesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ActivitiesPage;

export const pageQuery = graphql`
  query ActivitiesPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "activities-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
