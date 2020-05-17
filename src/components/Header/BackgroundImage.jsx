import React from 'react';
import styled from 'styled-components';
import { device, viewport } from '../styles';

const BackgroundImage = styled.div`
  background-image:  ${props => `url(${props.url})`};
  background-position: top 50% right 60%;
  background-size: cover;
  height: ${props =>  `${props.height || 300}px`};
  left: 0;
  opacity: 0.9;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;

  @media ${device.tablet} {
    background-position: top 50% right 55%;
  }

  @media ${device.mobile} {
    background-position:  top 50% right 40%;
    filter: blur(3px);
    height: 100%;
    opacity: 0.4;
  }
`;

export default BackgroundImage;