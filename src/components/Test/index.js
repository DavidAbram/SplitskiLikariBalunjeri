import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

export const Test = ({ data }) => {
  const { title, subtitle, logo, hero } = data.markdownRemark.frontmatter;
  return (
    <div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
    {
      markdownRemark(frontmatter: {configType: {eq: "header"}}) {
        frontmatter {
          title
          subtitle
          logo {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          hero {
            childImageSharp {
              fluid(maxWidth: 120, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `}
    render={(data) => <Test data={data} />}
  />
)