import React from 'react';
import styled from 'styled-components';
import { colors, font, device } from '../styles';

const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 30px auto;
  max-width: 1400px;
  position: relative;
  padding-bottom: 30px;
  width: 90vw;


  @media ${device.tablet} {
    margin: 30px 15px;
    padding-bottom: 20px;
  }
  nav {
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
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-basis: calc(100% - 200px - 20px);
  flex-wrap: wrap;
  margin: 20px 0 0 20px;

  h1, h6 {
    color: ${colors.primaryDark};
    flex-basis: 100%;
    margin: 0;
  }
  h1 {
    ${font.fluidSize(35,60)}
    font-weight: 700;
    margin-bottom: 30px;
  }
  h6 {
    ${font.fluidSize(14,28)}
    font-weight: 400;
    letter-spacing: 1.25px;
  }

  @media ${device.tablet} {
    flex-basis: calc(100% - 200px - 20px);
    
    h1, h6 {
      max-width: 80%;
      margin-bottom: 20px;
    }
  }
`;


Logo.Text = LogoText;


export default Logo;