import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export const IndexPageTemplate = ({
  title,
  content,
}) => (
  <Layout>
    <Header />
    <h1>{title}</h1>
    <p>{content}</p>
    <Footer />
  </Layout>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <IndexPageTemplate
        title={frontmatter.title}
        content={frontmatter.content}
      />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        content
      }
    }
  }
`
