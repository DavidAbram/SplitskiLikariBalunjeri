import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const VisionPageTemplate = ({
  title,
  content,
}) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
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
