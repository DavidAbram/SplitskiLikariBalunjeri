import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../Content';
import { colors, device } from '../styles';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.black2};

  a {
    color: ${colors.black2};
  }
  button {
    color: ${colors.black2};
    background: transparent;
    border:none;
    font-size: 18px;
    text-decoration: underline;
    outline: none;
    padding-left: 0;
  }
`;

const AnnouncementTitle = styled.div`
  font-size: 24px;

  @media ${device.tablet} {
    font-size: 20px;
  }
  @media ${device.mobile} {
    font-size: 20px;
  }
`;


/**
 * A generalized component for a single activity or navigation
 */
export const Announcement = ({
  Wrapper = React.Fragment,
  title,
  date,
  content,
  url,
  PageContent = Content,
  className = '',
  excerpt,
}) => (
  <Wrapper className={className}>
    <AnnouncementTitle>{title}</AnnouncementTitle>
    <PageContent style={{ textAlign: 'justify'}}>{excerpt || content}</PageContent>
    <StyledDiv>
      {
        url && <Link to={url}>Pročitaj više</Link>
      }
      {
        !url && <button onClick={() => window.history.back()}>
          Idi natrag
        </button>
      }
      <div>{new Date(date).toLocaleDateString('hr-HR',options)}</div>
    </StyledDiv>    
  </Wrapper>
);

export default Announcement;
