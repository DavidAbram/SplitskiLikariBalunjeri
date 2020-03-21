import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby'
import PreviewCompatibleImage from '../PreviewCompatibleImage'
import Navigation from '../Navigation';

export const Header = ({ title, subtitle, logo, hero, heroHeight }) => {
  return (
    <section>
      <Link to="/">
        <PreviewCompatibleImage height={200} width={200} src={logo} alt={'logo'} />
      </Link>
      <h1>{title}</h1>
      <h6>{subtitle}</h6>
      <div style={{
        width: '100%',
        height: `${heroHeight || 300}px`,
        backgroundImage: `url(${hero})`,
      }} />
      <Navigation />
    </section>
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
    render={(data) => <Header 
        title={data.markdownRemark.frontmatter.title}
        subtitle={data.markdownRemark.frontmatter.subtitle}
        logo={data.markdownRemark.frontmatter.logo}
        hero={data.markdownRemark.frontmatter.hero.childImageSharp.original.src}
        heroHeight={data.markdownRemark.frontmatter.hero.childImageSharp.original.height}
      />}
  />
)