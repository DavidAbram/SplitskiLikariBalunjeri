import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';

export const MembersPageTemplate = ({
  title,
  content,
}) => (
  <Layout>
    <h1>{title}</h1>
    <p>{content}</p>
  </Layout>
)

MembersPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const MembersPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <MembersPageTemplate
        title={frontmatter.title}
        content={frontmatter.content}
      />
  )
}

MembersPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MembersPage

export const pageQuery = graphql`
  query MembersPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "members-page" } }) {
      frontmatter {
        title
        content
      }
    }
  }
`
