import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { HTMLContent } from '../Content';
import styled from 'styled-components';
import { colors, font, device } from '../styles';
import Notification from './Notification';
import { NotificationLandingStyles } from './NotificationWrapper';

const StyledH2 = styled.h2`
  ${font.fluidSize(18, 24, font.family)}
  font-weight: 700;
  color: ${colors.primaryDark};
  padding-bottom: 10px;
  border-bottom: 3px solid ${colors.primaryDark};
`;

const StyledDiv = styled.div`
  max-width: 100%;

  .notification {
    margin-bottom: 40px;
  }

  ${
  (props) => props.isLanding ? `
    max-width: 900px;
    flex-basis: calc(70% - 30px);
    width: calc(70% - 30px);

    .notification {
      ${NotificationLandingStyles}
    }


    @media ${ device.tablet} {
      min-width: 600px;
      flex-grow: 1;
      flex-basis: calc(70% - 30px);
      width: calc(70% - 30px);
      margin-light: 30px;
    }

    @media ${ device.mobile} {
      flex-basis: 100%;
      width: 100%;
    }
    ` : ''
  }



`

export const Notifications = ({ title, notifications, isLanding = true }) => (
  <StyledDiv isLanding={isLanding}>
    <StyledH2>{title}</StyledH2>
    {notifications.map((
      { title, date, content, url, excerpt }) =>
      <Notification
        key={`${title}-${date} `}
        PageContent={HTMLContent}
        title={title}
        date={date}
        content={content}
        excerpt={excerpt}
        url={url}
      />
    )}
  </StyledDiv>
);


const NotificationsWithQuery = (props) => (
  <StaticQuery
    query={graphql`
query {
  allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "notification" } } }, sort: { fields: frontmatter___date, order: DESC }) {
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
    render={data => (<Notifications isLanding={props.isLanding} title={props.title} notifications={
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
export { default as Notification } from './Notification';
