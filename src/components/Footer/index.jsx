import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import { colors, font, device } from '../styles';

const ColoredBackground = styled.section`
  background-color: ${colors.primaryDark};
  color: ${colors.white};
`;

const StyledSection = styled.div`
  ${font.fluidSize(14, 16)}
  align-items: center;
  
  display: flex;
  flex-basis: 30%;
  font-weight: 700;
  justify-content: space-between;
  letter-spacing: 1.25px;
  line-height: 1.8;
  margin: auto;
  max-width: 1800px;
  padding: 25px 100px 25px 50px;


  @media ${device.tablet} {
    flex-wrap: wrap;
    justify-content: center;
    padding: 25px 50px;

    & > div:nth-child(2) {
      flex-basis: 150px;
      margin-right: 10px;
    }
    & > div:nth-child(3) {
      margin-left: 20px;
    }
  }

  @media ${device.mobile} {
    padding: 25px 25px;
    flex-wrap: wrap;
    & > div:nth-child(2) {
      flex-basis: 150px;
    }
    & > div:nth-child(3) {
      flex-basis: calc(100% - 160px);
      margin-left: 10px;
    }
  }
`;

const StyledNavigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 160px;
  width: 25%;

  a {
    ${font.fluidSize(14, 16)}
    letter-spacing: 1.25px;
    color: inherit;
    flex-basis: 50%;
    text-decoration: none;
    width: 150px;
    &:hover {
      text-decoration: underline;
    }
  }


  @media ${device.tablet} {
    width: 100%;
    margin-bottom: 30px;
    justify-content: flex-start;
    a {
      flex-basis: 25%;
      text-align: center;
    }
  }

  @media ${device.mobile} {
    width: 100%;
    margin-bottom: 30px;
    justify-content: flex-start;
    a {
      flex-basis: 50%;
      text-align: center;
    }
  }

`;



export const Footer = ({ name, address, logo, additionalData }) => {
  return (
    <ColoredBackground>
      <StyledSection>
        <StyledNavigation>
          <Link to="/o-udruzi">
            O udruzi
        </Link>
          <Link to="/misija-i-vizija">
            Misija i vizija
        </Link>
          <Link to="/clanstvo">
            Članstvo
        </Link>
          <Link to="/kontakt">
            Kontakt
        </Link>
          <Link to="/misija-i-vizija">
            Misija i vizija
        </Link>
          <Link to="/clanstvo">
            Članstvo
        </Link>
          <Link to="/kontakt">
            Kontakt
        </Link>
        </StyledNavigation>
        <PreviewCompatibleImage height="150px" width="150px" src={logo} alt={'logo'} />
        <div>
          <div>{name}</div>
          <div>{address}</div>
          <div>{additionalData}</div>
        </div>
      </StyledSection>
    </ColoredBackground>

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