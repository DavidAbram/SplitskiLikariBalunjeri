import React from 'react';
import PropTypes from 'prop-types';
import { NotificationsPageTemplate } from '../../templates/notifications-page';

const NotificationsPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <NotificationsPageTemplate title={data.title} />;
  } else {
    return <div>Loading...</div>;
  }
};

NotificationsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default NotificationsPagePreview;
