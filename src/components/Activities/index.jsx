import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Content, { HTMLContent } from '../Content';

export const Activity = ({title, date, content, url, PageContent = Content}) => (
  <>
    <div>{title}</div>
    <div>{date}</div>
    <Link to={url}>{url}</Link>
    <PageContent>{content}</PageContent>
  </>
);

export const Activities = ({ activities }) => (
  <div>
    <h2>Activities</h2>
    {activities.map((
      {title, date, content, url}) => 
        <Activity 
          PageContent={HTMLContent}
          title={title}
          date={date}
          content={content} 
          url={url}
        />
      )}
  </div>
)


const ActivitiesWithQuery = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "activities"}}}, limit: 1) {
          nodes {
            html
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    `}
    render={data => (<Activities activities={
      data.allMarkdownRemark.nodes.map(node => 
        ({ 
          content: node.html,
          title: node.frontmatter.title,
          date: node.frontmatter.date,
          url: node.fields.slug
        })
      )} 
    />)}
  />
);

export default ActivitiesWithQuery;