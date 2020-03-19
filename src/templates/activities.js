import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const ActivitiesTemplate = ({
  title,
  content,
  date,
}) => (
  <div>
    <h1>{title}</h1>
    <p>{content}</p>
    <p>{date}</p>
  </div>
)

ActivitiesTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
}

const Activities = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <ActivitiesTemplate
        title={frontmatter.title}
        content={frontmatter.content}
        date={frontmatter.date}
      />
  )
}

Activities.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
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
