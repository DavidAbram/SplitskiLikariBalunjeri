import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Content, { HTMLContent } from '../components/Content';

export const MembersPageTemplate = ({
  title,
  content,
  PageContent = Content,
}) => (
  <>
    <Title>{title}</Title>
    <PageContent>{content}</PageContent>
  </>
);

MembersPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

const MembersPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <MembersPageTemplate
        title={frontmatter.title}
        content={html}
        PageContent={HTMLContent}
      />
    </Layout>
  );
};

MembersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
};

export default MembersPage;

export const pageQuery = graphql`
  query MembersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "members-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
