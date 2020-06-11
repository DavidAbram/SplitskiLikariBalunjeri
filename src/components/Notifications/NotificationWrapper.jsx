import styled from 'styled-components';
import { device } from '../styles';

const NotificationWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const NotificationLandingStyles = `
  margin-bottom: 40px;
  margin-left: auto;
  width: calc(100% - 40px);

  &:before {
    background-color: red;
    border-radius: 50%;
    content: "";
    height: 25px;
    position: absolute;
    right: calc(100% + 15px);
    top: 3px;
    width: 25px;
  }

  @media ${device.tablet} {
    margin-bottom: 30px;
    width: calc(100% - 35px);

    &:before {
      height: 18px;
      top: 5px;
      width: 18px;
    }
  }

  @media ${device.mobile} {
    margin-bottom: 30px;
    width: calc(100% - 40px);
    margin: 20px;

    &:before {
      height: 10px;
      top: 10px;
      right: calc(100% + 10px);
      width: 10px;
    }
  }
`;


export { NotificationLandingStyles };
export default NotificationWrapper;