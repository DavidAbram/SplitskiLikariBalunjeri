import React from 'react'
import PropTypes from 'prop-types';
import { Notification } from '../../components/Notifications';

const NotificationsPreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <Notification
        content={widgetFor('body')}
        title={data.title}
        date={data.date.toISOString()}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

NotificationsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default NotificationsPreview;
