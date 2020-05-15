import React from 'react';
import styled from 'styled-components';
import { colors, font, device } from '../styles';

const StyledH2 = styled.h2`
  ${font.fluidSize(18,24)}
  font-weight: 700;
  color: ${colors.primaryDark};
  padding-bottom: 10px;
  border-bottom: 3px solid ${colors.primaryDark};
`;

const Title = ({ children }) => (
  <StyledH2>
    {children}
  </StyledH2>
)


export default Title;