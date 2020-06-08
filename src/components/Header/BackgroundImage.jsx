import styled from 'styled-components';
import { device } from '../styles';

const BackgroundImage = styled.div`
  background-image:  ${props => `url(${props.url})`};
  background-position: top 50% right 0%;
  background-size: 1920px 300px;
  height: ${props =>  `${props.height || 300}px`};
  left: 0;
  opacity: 0.9;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;


  @media (min-width: 1200px) and (max-width: 1800px) {
    background-position: top 50% right 75%;
    background-size: auto 300px;
  }


  @media ${device.tablet} {
    background-position: top 50% right 75%;
  }


  @media (min-width: 601px) and (max-width: 792px) {
    background-position: top 50% right 60%;
    background-size: auto 300px;
  }


  @media ${device.mobile} {
    background-position:  top 50% right 40%;
    filter: blur(3px);
    height: 100%;
    opacity: 0.4;
  }
`;

export default BackgroundImage;