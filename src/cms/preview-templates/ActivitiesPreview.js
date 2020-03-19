import React from 'react'
import PropTypes from 'prop-types';
import { ActivitiesTemplate } from '../../templates/activities';

const ActivitiesPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ActivitiesTemplate
        content={data.content}
        title={data.title}
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
