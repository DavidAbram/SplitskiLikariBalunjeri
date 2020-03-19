import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const AboutPageTemplate = ({
  title,
  content,
}) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
)

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <AboutPageTemplate
        title={frontmatter.title}
        content={frontmatter.content}
      />
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      frontmatter {
        title
        content
      }
    }
  }
`
