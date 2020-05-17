import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Content from '../Content';
import NotificationTitle from './NotificationTitle';
import NotificationWrapper from './NotificationWrapper';
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

const Notification = ({ title, date, content, url, PageContent = Content }) => (
  <NotificationWrapper>
    <NotificationTitle>{title}</NotificationTitle>
    <PageContent>{content}</PageContent>
    <StyledDiv>
      <Link to={url}>Pročitaj više</Link>
      <div>{new Date(date).toLocaleDateString('hr-HR',options)}</div>
    </StyledDiv>
  </NotificationWrapper>
);

export default Notification;
