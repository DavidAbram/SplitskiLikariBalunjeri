import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';

export const VisionPageTemplate = ({
  title,
  content,
}) => (
  <Layout>
    <h1>{title}</h1>
    <p>{content}</p>
  </Layout>
)

VisionPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const VisionPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <VisionPageTemplate
        title={frontmatter.title}
        content={frontmatter.content}
      />
  )
}

VisionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VisionPage

export const pageQuery = graphql`
  query VisionPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "vision-page" } }) {
      frontmatter {
        title
        content
      }
    }
  }
`
