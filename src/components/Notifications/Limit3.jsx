import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Notifications } from './';

const NotificationsWithQuery = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "notification"}}}, limit: 3, sort: {fields: frontmatter___date, order: DESC}) {
          nodes {
            html
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt(pruneLength: 500, format: HTML)
          }
        }
      }
    `}
    render={data => (<Notifications title={props.title} notifications={
      data.allMarkdownRemark.nodes.map(node =>
        ({
          content: node.html,
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          url: node.fields.slug,
          excerpt: node.excerpt,
        })
      )}
    />)}
  />
);

export default NotificationsWithQuery;