import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const IndexPageTemplate = ({
  title,
  content,
  PageContent = Content,
}) => (
  <>
    <h1>{title}</h1>
    <PageContent>{content}</PageContent>
  </>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  console.log(html);
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        content={html}
        PageContent={HTMLContent}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
