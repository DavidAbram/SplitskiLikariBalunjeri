import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { HTMLContent } from '../Content';
import styled from 'styled-components';
import { colors, font } from '../styles';
import Activity from './Activity';
export { default as Activity } from './Activity';

const StyledH2 = styled.h2`
  ${font.fluidSize(18,24, font.family)}
  font-weight: 700;
  color: ${colors.primaryDark};
  padding-bottom: 10px;
  border-bottom: 3px solid ${colors.primaryDark};
`;


export const Activities = ({ title, activities }) => (
  <div style={{ marginBottom: '50px' }}>
    <StyledH2>{title}</StyledH2>
    {activities.map((
      {title, date, content, url}) => 
        <Activity 
          key={`${title}-${date}`}
          PageContent={HTMLContent}
          title={title}
          date={date}
          content={content} 
          url={url}
        />
      )}
  </div>
)


const ActivitiesWithQuery = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "activity"}}}, limit: 1) {
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
    render={data => (<Activities title={props.title} activities={
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