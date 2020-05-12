import React from 'react'
import PropTypes from 'prop-types';
import { ActivitiesTemplate } from '../../templates/activities';

const ActivitiesPreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  if (data) {
    return (
      <ActivitiesTemplate
        content={widgetFor('body')}
        title={data.title}
        date={data.date.toISOString()}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ActivitiesPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default ActivitiesPreview;
