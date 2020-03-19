import React from 'react'
import PropTypes from 'prop-types';
import { NotificationsTemplate } from '../../templates/notifications';

const NotificationsPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <NotificationsTemplate
        content={data.content}
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
