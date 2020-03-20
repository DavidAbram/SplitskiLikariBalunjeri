import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ActivitiesTemplate = ({
  title,
  content,
  date,
  PageContent = Content,
}) => (
  <>
    <h1>{title}</h1>
    <PageContent>{content}</PageContent>
    <span>{date}</span>
  </>
)

ActivitiesTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
}

const Activities = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ActivitiesTemplate
        title={frontmatter.title}
        content={frontmatter.content}
        date={frontmatter.date}
        PageContent={HTMLContent}
      />
    </Layout>
  )
}

Activities.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Activities

export const pageQuery = graphql`
  query ActivitiesTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "activities" } }) {
      frontmatter {
        title
        content
        date
      }
    }
  }
`
