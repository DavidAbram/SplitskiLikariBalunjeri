import styled from 'styled-components';
import { device } from '../styles';

const NotificationWrapper = styled.div`
  position: relative;
  width: calc(100% - 40px);
  margin-left: auto;
  margin-bottom: 40px;

  &:before {
    position: absolute;
    content: "";
    background-color: red;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    right: calc(100% + 15px);
    top: 0px;
  }

  @media ${device.tablet} {
    margin-bottom: 30px;
    width: calc(100% - 38px);
    &:before {
      height: 20px;
      top: 1px;
      width: 20px;
    }
  }

  @media ${device.mobile} {
    margin-bottom: 30px;
    width: calc(100% - 35px);

    &:before {
      height: 18px;
      top: 1px;
      width: 18px;
    }
  }

`
export default NotificationWrapper;