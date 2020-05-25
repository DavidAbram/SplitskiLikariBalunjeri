import React from 'react';
import Content from '../Content';
import Announcement from '../Announcement';
import NotificationWrapper from './NotificationWrapper';


const Notification = ({ title, date, content, url, PageContent = Content }) => (
  <Announcement
    title={title}
    content={content}
    url={url}
    date={date}
    PageContent={PageContent}
    Wrapper={NotificationWrapper}
    className="notification"
  />
);

export default Notification;
