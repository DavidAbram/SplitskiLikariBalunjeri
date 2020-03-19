import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

export const NotificationsTemplate = ({
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

NotificationsTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
}

const Notifications = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
      <NotificationsTemplate
        title={frontmatter.title}
        content={frontmatter.content}
        date={frontmatter.date}
      />
  )
}

Notifications.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Notifications

export const pageQuery = graphql`
  query NotificationsTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "notifications" } }) {
      frontmatter {
        title
        content
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
