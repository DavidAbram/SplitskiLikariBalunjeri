import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const NotificationsTemplate = ({
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

NotificationsTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
}

const Notifications = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <NotificationsTemplate
        title={frontmatter.title}
        content={html}
        date={frontmatter.date}
        PageContent={HTMLContent}
      />
    </Layout>
  )
}

Notifications.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Notifications

export const pageQuery = graphql`
  query NotificationsTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "notifications" } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
