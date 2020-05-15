import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Title from '../components/Title';
import Members from '../components/Members';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({
  title,
  content,
  PageContent = Content,
}) => (
  <>
    <Title>{title}</Title>
    <PageContent>{content}</PageContent>
    <Members />
  </>
)

AboutPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

const AboutPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  return (
    <Layout>
      <AboutPageTemplate
        title={frontmatter.title}
        content={html}
        PageContent={HTMLContent}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
      html: PropTypes.string,
    }),
  }),
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
