import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, font, device } from '../styles';

const StyledNavigation = styled.nav`
  ${font.fluidSize(16, 20)}
  color: ${colors.primaryDark};
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  left: 220px;
  max-width: calc(100% - 200px - 20px);
  position: absolute;
  top: 100%;
  width: 450px;
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }


  @media ${device.mobile} {
      flex-basis: 100%;
      left: 0;
      max-width: 100%;
      padding: 20px 15px;
      position: relative;
      top: -1px;
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
  </StyledNavigation>
)


export default Navigation;