import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../Content';
import ActivityTitle from './ActivityTitle';
import { colors } from '../styles';

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.black2};

  a {
    color: ${colors.black2};
  }
`;



export const Activity = ({title, date, content, url, PageContent = Content}) => (
  <>
    <ActivityTitle>{title}</ActivityTitle>
    <PageContent>{content}</PageContent>
    <StyledDiv>
      <Link to={url}>Pročitaj više</Link>
      <div>{new Date(date).toLocaleDateString(navigator.language || 'hr-HR',options)}</div>
    </StyledDiv>
  </>
);

export default Activity;
