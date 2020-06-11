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

const StyledDiv = styled.div`
  margin-bottom: 50px;
  .activity {
    margin-bottom: 40px;
  }
`


export const Activities = ({ title, activities }) => (
  <StyledDiv>
    <StyledH2>{title}</StyledH2>
    {activities.map((
      {title, date, content, url, excerpt}) => 
        <Activity 
          key={`${title}-${date}`}
          PageContent={HTMLContent}
          title={title}
          date={date}
          content={content} 
          excerpt={excerpt}
          url={url}
        />
      )}
  </StyledDiv>
)


const ActivitiesWithQuery = (props) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "activity"}}}, sort: {fields: frontmatter___date, order: DESC}) {
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
    render={data => (<Activities title={props.title} activities={
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

export default ActivitiesWithQuery;