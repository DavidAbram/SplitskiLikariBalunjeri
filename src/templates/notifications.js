import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { Notification } from '../components/Notifications';

export const NotificationsTemplate = ({
  title,
  content,
  date,
  PageContent = Content,
}) => (
  <Notification title={title} content={content} date={date} PageContent={PageContent} />
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
