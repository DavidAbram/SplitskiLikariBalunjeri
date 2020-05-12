import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Content, { HTMLContent } from '../Content';

export const Notification = ({title, date, content, PageContent = Content}) => (
  <>
    <div>{title}</div>
    <div>{date}</div>
    <PageContent>{content}</PageContent>
  </>
);

export const Notifications = ({ notifications }) => (
  <div>
    <h2>Notifications</h2>
    {notifications.map((
      {title, date, content}) => 
        <Notification 
          PageContent={HTMLContent}
          title={title}
          date={date}
          content={content} 
        />
      )}
  </div>
)


const NotificationsWithQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "notifications"}}}, limit: 3) {
          nodes {
            html
            frontmatter {
              title
              date
            }
          }
        }
      }
    `}
    render={data => (<Notifications notifications={data.allMarkdownRemark.nodes.map(node => ({ content: node.html, title: node.frontmatter.title, date: node.frontmatter.date }))} />)}
  />
);

export default NotificationsWithQuery;