import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Header = ({ data }) => {
  const { title, subtitle, logo, hero } = data.markdownRemark.frontmatter;
  return (
    <div>
      <div style={{ height: '200px', width: '200px'}}>
        <Img fluid={logo.childImageSharp.fluid} alt={'logo'} />
      </div>
      <div>{title}</div>
      <div>{subtitle}</div>
      <div style={{
        width: '100%',
        height: `${hero.childImageSharp.original.height}px`,
        backgroundImage: `url(${hero.childImageSharp.original.src})`,
      }} />
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
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          hero {
            childImageSharp {
              original {
                src
                height
              }
            }
          }
        }
      }
    }
    `}
    render={(data) => <Header data={data} />}
  />
)