import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import ColoredBackground from './Background';
import StyledSection from './Section';
import StyledNavigation from './Navigation';


export const Footer = ({ name, address, logo, additionalData }) => {
  return (
    <ColoredBackground>
      <StyledSection>
        <StyledNavigation>
          <Link to="/o-udruzi" style={{ order: 1 }}>
            O udruzi
          </Link>
          <Link to="/misija-i-vizija" style={{ order: 3 }}>
            Misija i vizija
          </Link>
          <Link to="/clanstvo" style={{ order: 5 }}>
            Članstvo
        </Link>
          <Link to="/kontakt" style={{ order: 7 }}>
            Kontakt
        </Link>
          <Link to="/obavijesti" style={{ order: 2 }}>
            Obavijesti
        </Link>
          <Link to="/aktivnosti" style={{ order: 4 }}>
            Aktivnosti
        </Link>
          <Link to="/galerija"  style={{ order: 6 }}>
            Galerija
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