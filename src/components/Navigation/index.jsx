import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, font, device, sizes } from '../styles';

const StyledNavigation = styled.nav`
  ${font.fluidSize(16, 20, font.family)}
  color: ${colors.primaryDark};
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  left: 220px;
  max-width: calc(100% - 200px - 20px);
  position: absolute;
  top: calc(100% - 10px);
  width: 900px;

  left: 15px;
  a {
    flex-grow: 1;
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: ${sizes.mobile.minimum}) and (max-width: 1300px) {
    flex-wrap: wrap;
    left: 15px;
    max-width: 100%;
    width: 630px;
  }


  @media ${device.mobile} {
      flex-wrap: wrap;
      flex-basis: 100%;
      left: 0;
      max-width: 100%;
      padding: 20px 15px;
      position: relative;
      top: -1px;
      margin-top: -10px;
      a {
        flex-basis: 33%;
        text-align: center;
        padding: 10px 0;
      }
  }
`;


const Navigation = () => (
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
    <Link to="/kontakt">
      Obavijesti
    </Link>
    <Link to="/kontakt">
      Galerija
    </Link>
  </StyledNavigation>
)


export default Navigation;