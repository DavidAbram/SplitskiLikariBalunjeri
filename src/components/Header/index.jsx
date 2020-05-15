import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Navigation from '../Navigation';
import BackgroundImage from './BackgroundImage';
import LogoWrapper from './Logo';

const StyledSection = styled.section`
  overflow:hidden;
  position: relative;
`;

export const Header = ({ title, subtitle, logo, hero, heroHeight }) => {
  return (
    <StyledSection>
      <BackgroundImage height={heroHeight} url={hero} />  
      <Link to="/" style={{ textDecoration: 'none' }}>
        <LogoWrapper>
          <PreviewCompatibleImage height="200px" width="200px" src={logo} alt={'logo'} />
          <LogoWrapper.Text>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
          </LogoWrapper.Text>
          <Navigation />
        </LogoWrapper>
      </Link>
    </StyledSection>
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