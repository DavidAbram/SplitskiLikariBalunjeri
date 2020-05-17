import React from 'react';
import styled from 'styled-components';
import { colors, font, device } from '../styles';

const Text = styled.div`
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
  ${font.fluidSize(32, 60, font.family)}
  font-weight: 700;
  margin-bottom: 30px;
}
h6 {
  ${font.fluidSize(18, 28, font.family)}
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

@media ${device.mobile} {
  margin: auto;
  padding-top: 20px;
  text-align: center;
  width: calc(100% - 20px);

  h1 {
    margin-bottom: 5px;
  }

  h6 {
    margin-bottom: 10px;
  }
}
`;

export default Text;
