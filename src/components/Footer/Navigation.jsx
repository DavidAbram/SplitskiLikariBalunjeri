import styled from 'styled-components';
import { font, device } from '../styles';

const StyledNavigation = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
max-height: 160px;
width: 25%;

a {
  ${font.fluidSize(14, 16, font.family)}
  letter-spacing: 1.25px;
  color: inherit;
  flex-basis: 50%;
  text-decoration: none;
  width: 150px;
  &:hover {
    text-decoration: underline;
  }
}


@media ${device.tablet} {
  width: 100%;
  margin-bottom: 30px;
  justify-content: flex-start;
  a {
    flex-basis: 25%;
    text-align: center;
  }
}

@media ${device.mobile} {
  width: 100%;
  margin-bottom: 30px;
  justify-content: flex-start;
  a {
    flex-basis: 50%;
    text-align: center;
  }
}

`;

export default StyledNavigation;
