import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Footer = ({ data }) => {
  const { name, address, logo, additionalData } = data.markdownRemark.frontmatter;
  return (
    <div>
      <div style={{ height: '150px', width: '150px'}}>
        <Img fluid={logo.childImageSharp.fluid} alt={'logo'} />
      </div>
      <div>{name}</div>
      <div>{address}</div>
      <div>{additionalData}</div>
    </div>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
    {
      markdownRemark(frontmatter: {configType: {eq: "footer"}}) {
        frontmatter {
          name
          address
          additionalData
          logo {
            childImageSharp {
              fluid(maxWidth: 150, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    `}
    render={(data) => <Footer data={data} />}
  />
)