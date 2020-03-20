import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';

export const Footer = ({ name, address, logo, additionalData }) => {
  return (
    <section>
      <div style={{ height: '150px', width: '150px'}}>
        <PreviewCompatibleImage src={logo} alt={'logo'} />
      </div>
      <div>{name}</div>
      <div>{address}</div>
      <div>{additionalData}</div>
    </section>
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
    render={(data) => <Footer 
      name={data.markdownRemark.frontmatter.name}
      address={data.markdownRemark.frontmatter.address}
      logo={data.markdownRemark.frontmatter.logo}
      additionalData={data.markdownRemark.frontmatter.additionalData}
    />}
  />
)