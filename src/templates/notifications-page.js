import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Notifications from '../components/Notifications';

export const NotificationsPageTemplate = ({
  title,
}) => (
    <Notifications title={title} isLanding={false} />
);

NotificationsPageTemplate.propTypes = {
  title: PropTypes.string,
};

const NotificationsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <NotificationsPageTemplate
        title={frontmatter.title}
      />
    </Layout>
  );
};

NotificationsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default NotificationsPage;

export const pageQuery = graphql`
  query NotificationsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "notifications-page" } }) {
      frontmatter {
        title
      }
    }
  }
`;
