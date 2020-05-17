import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { Activity } from '../components/Activities';

export const ActivitiesTemplate = ({
  title,
  content,
  date,
  url,
  PageContent = Content,
}) => (
  <Activity
    title={title}
    content={content}
    date={date}
    url={url}
    PageContent={PageContent}
  />
);

ActivitiesTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
};

const Activities = ({ data }) => {
  const { frontmatter, html, fields } = data.markdownRemark;
  return (
    <Layout>
      <ActivitiesTemplate
        title={frontmatter.title}
        content={html}
        date={frontmatter.date}
        url={fields.slug}
        PageContent={HTMLContent}
      />
    </Layout>
  );
};

Activities.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
      fields: PropTypes.object,
    }),
  }),
};

export default Activities;

export const pageQuery = graphql`
  query ActivitiesTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "activity" } }) {
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`;
