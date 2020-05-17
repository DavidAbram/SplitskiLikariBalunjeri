import styled from 'styled-components';
import { device } from '../styles';

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 30px auto;
  max-width: 1400px;
  padding-bottom: 30px;
  position: relative;
  width: 90vw;

  @media ${device.tablet} {
    margin: 30px 15px;
    padding-bottom: 20px;
  }

  @media ${device.mobile} {
    flex-wrap: wrap;
    margin: 0;
    padding-bottom: 0;
    width: 100vw;

    & > a:first-child {
      margin: auto !important;
      padding-bottom: 0;
      padding: 30px;
    }
  }

`;



export default Wrapper;