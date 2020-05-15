import React from 'react';
import styled from 'styled-components';
import { device, viewport } from '../styles';

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  height: ${props =>  `${props.height || 300}px`};
  background-image:  ${props => `url('${props.url}')`};
  background-size: cover;
  background-position: top 50% right 60%;
  z-index: -1;


  @media ${device.tablet} {
    background-position: top 50% right 55%;
  }

  @media ${device.mobile} {
    background-position:  top 50% right 40%;
  }
`;

export default BackgroundImage;