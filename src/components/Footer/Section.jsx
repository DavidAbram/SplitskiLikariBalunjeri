import React from 'react';
import styled from 'styled-components';
import { font, device } from '../styles';

const StyledSection = styled.div`
  ${font.fluidSize(14, 16, font.family)}
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
    justify-content: space-evenly;
    & > div:nth-child(2) {
      flex-basis: 150px;
    }
    & > div:nth-child(3) {
      flex-basis: 200px;
      margin-left: 10px;
      margin-top: 10px;
    }
  }
`;

export default StyledSection;
