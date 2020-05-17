import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Navigation from '../Navigation';
import BackgroundImage from './BackgroundImage';
import Wrapper from './Wrapper';
import Text from './Text';

const StyledSection = styled.section`
  overflow:hidden;
  position: relative;
`;

export const Header = ({ title, subtitle, logo, hero, heroHeight }) => {
  return (
    <StyledSection>
      <BackgroundImage height={heroHeight} url={hero} />
      <Wrapper>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <PreviewCompatibleImage height="200px" width="200px" src={logo} alt={'logo'} />
        </Link>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <Text>
            <h1>{title}</h1>
            <h6>{subtitle}</h6>
          </Text>
        </Link>
        <Navigation />
      </Wrapper>
    </StyledSection >
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