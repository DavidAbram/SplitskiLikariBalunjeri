import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Title from '../components/Title';
import Content, { HTMLContent } from '../components/Content';

export const VisionPageTemplate = ({
  title,
  content,
  PageContent = Content,
}) => (
  <>
    <Title>{title}</Title>
    <PageContent>{content}</PageContent>
  </>
)

VisionPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const VisionPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <Layout>
      <VisionPageTemplate
        title={frontmatter.title}
        content={html}
        PageContent={HTMLContent}
      />
    </Layout>
  )
}

VisionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VisionPage

export const pageQuery = graphql`
  query VisionPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "vision-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
